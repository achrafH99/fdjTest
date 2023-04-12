# fdjTest

## Prérequis
Node.js
MongoDB
Redis
## Installation
Le projet se décompose en deux dossier principaux backend (node) et frontend (angular) 
Cloner ce dépôt de code : https://github.com/achrafH99/fdjTest.git
Installer les dépendances dans chaque dossier avec la commande : npm install
Lancer le serveur backend : node index.js
Lancer le serveur frontend : ng serve
## Utilisation
Le serveur fonctionne sur le port défini dans la variable d'environnement par défaut, 3000 pour le backend et 4200 pour le frontend. Pour accéder aux différentes fonctionnalités de l'API, vous pouvez utiliser les routes suivantes pour le backend :

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
