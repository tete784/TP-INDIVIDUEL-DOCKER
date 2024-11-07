const express = require('express');
const redis = require('redis');
const app = express();

// Création du client Redis
const client = redis.createClient({ url: 'redis://redis:6379' });

// Gestion des erreurs de connexion
client.on('error', (err) => {
    console.error('Redis connection error:', err);
});

// Connexion au Redis
client.connect()
    .then(() => {
        console.log('Connected to Redis');
    })
    .catch((err) => {
        console.error('Failed to connect to Redis:', err);
    });

app.get('/', async (req, res) => {
    try {
        const value = await client.get('key');
        res.send(`Hello World! Redis value: ${value || 'none'}`);
    } catch (error) {
        res.status(500).send('Error connecting to Redis');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
