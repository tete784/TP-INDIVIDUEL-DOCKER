# TP Individuel Docker : Déploiement d'une Application Node.js avec Docker et Docker Compose

## Prérequis

- **Docker** : Assurez-vous que Docker est installé sur votre machine.
- **Docker Compose** : Assurez-vous que Docker Compose est disponible pour démarrer les services.

## Structure du Projet

- `app.js` : Fichier principal de l'application Node.js.
- `Dockerfile` : Définit l'image Docker pour l'application Node.js.
- `docker-compose.yml` : Fichier Docker Compose pour démarrer et configurer les services Node.js et Redis.
- `package.json` : Fichier de configuration pour l'application Node.js, incluant les dépendances.
- `.gitignore` : Exclut les fichiers et dossiers non pertinents tels que `node_modules`.
- `ReponseQuestion.txt` : Contient les reponses aux question du TP.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/tete784/TP-INDIVIDUEL-DOCKER.git
   cd TP-INDIVIDUEL-DOCKER
   ```
2. Installez les dépendances Node.js :
```bash
   npm install
   ```
3. Construire et démarrer l'application avec Docker Compose :
```bash
   docker-compose up --build
   ```
le lancement permet d'obtenir :
Node.js disponible sur http://localhost:3000
Redis utilisé comme base de données

4. Arrêter et nettoyer les conteneurs :
```bash
   docker-compose down
   ```

Théo Gravez