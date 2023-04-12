# fdjTest

## Prérequis
Node.js
MongoDB
Redis
## Installation
Cloner ce dépôt de code : git clone https://github.com/your-username/your-project.git
Installer les dépendances : npm install
Créer un fichier .env à la racine du projet en se basant sur le modèle fourni dans .env.example et y remplir les variables d'environnement nécessaires.
Lancer le serveur : npm start
## Utilisation
Le serveur fonctionne sur le port défini dans la variable d'environnement PORT. Pour accéder aux différentes fonctionnalités de l'API, vous pouvez utiliser les routes suivantes :

### Teams
GET /api/teams : Récupère la liste de toutes les équipes.
GET /api/teams/:id : Récupère les informations d'une équipe spécifique en fonction de son ID.
GET /api/teams/league/:id : Récupère la liste des équipes d'une ligue spécifique en fonction de son ID.
### Players
GET /api/players : Récupère la liste de tous les joueurs.
GET /api/players/:id : Récupère les informations d'un joueur spécifique en fonction de son ID.
GET /api/players/team/:id : Récupère la liste des joueurs d'une équipe spécifique en fonction de son ID.
### Leagues
GET /api/leagues : Récupère la liste de toutes les ligues.
GET /api/leagues/:id : Récupère les informations d'une ligue spécifique en fonction de son ID.
