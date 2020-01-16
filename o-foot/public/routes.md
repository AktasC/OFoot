# Routes

Version 3.0

| URL | Titre | Description de la page | Méthode HTTP | Controller | Méthode | commentaire |
|--|--|--|--|--|--|--|
| `/` | Home | page d'accueil| GET | HomeController | home | MVP|
|Main|--|--|--|--|--|--|
| `/mentions-legales` | Page mentions légales | contenu rédactionnel pour les mentions légales | GET | MainController | mentionsLegales | MVP |
| `/notre-team` | Page notre team | liste membres de l'équipe | GET | MainController | team | MVP |
|Category|--|--|--|--|--|--|
| `/category/create-team` | Page catégorie create team | contenu explicatif create team | GET | CategoryController | createTeam | Hors MVP |
| `/category/manage-team` | Page catégorie manage team| contenu explicatif manage team  | GET | CategoryController | manageTeam | Hors MVP |
| `/category/create-event`| Page catégorie create event | contenu explicatif create event | GET | CategoryController | createEvent | Hors MVP |
| `/category/manage-stat`| Page catégorie manage statistiques | contenu explicatif manage statistiques | GET | CategoryController | manageStats | Hors MVP |
|User|--|--|--|--|--|--|
| `/register` | Inscription | traitement formulaire d'inscription | POST | UserController | register | MVP |
| `/login` | Connexion | formulaire de connexion | GET | UserController | signin | MVP |
| `/login` | Connexion | traitement formulaire de connexion | POST | UserController | signin | MVP |
| `/logout` | Deconnexion | formulaire de deconnexion | GET | UserController | logout | MVP |
| `/user/profile` | Profil utilistateur | informations sur le profil connecté | GET | UserController | profile | MVP |
| `/user/profile` | Profil utilistateur | traitement informations sur le profil connecté | POST | UserController | profile | MVP |
| `/user/edit` | Modification compte utilisateur | formulaire modifier les informations du profil utilisateur | GET | UserController | edit | MVP |
| `/user/edit` | Modification compte utilisateur | traitement formulaire modifier les informations du profil utilisateur  | POST | UserController | edit | MVP |
| `/user/edit-password` | Modification password utilisateur | modifier le password de l'utilisateur | GET | UserController | editPassword | MVP |
| `/user/edit-password` | Modification password utilisateur | traitement pour modifier le password de l'utilisateur | POST | UserController | editPassword | MVP |
|Dashboard|--|--|--|--|--|--|
|`/dashboard/team/{id}`| Dashboard équipe | page principale de l'application O'Foot | GET | DashBoardController | home | MVP|
|Event|--|--|--|--|--|--|
|`/event/list`| Page liste des événements | page listant l'ensemble des événements créés | GET | EventController | list | MVP|
|`/event/add`| Créer événement | formulaire création d'événements | GET | EventController | new | MVP|
|`/event/add`| Créer événement | traitement formulaire création d'événements | POST | EventController | new | MVP|
|`/event/training/edit/{id}`| Modifier un entraînement | formulaire modification d'entrainement | GET | EventController | editTraining| MVP|
|`/event/training/edit/{id}`| Modifier un entraînement  | traitement formulaire modification d'entrainement | POST | EventController |editTraining | MVP|
|`/event/match/edit/{id}`| Modifier un match | formulaire modification du match| GET | EventController | editMatch | MVP|
|`/event/match/edit/{id}`| Modifier un match | traitement formulaire modification du match | POST | EventController | editMatch | MVP|
|`/event/delete/{id}`| Supprime un événement | traitement formulaire suppresion événement | POST | EventController | delete | MVP|
|`/event/match/{id}`| Page évenement : match | page affichant un match en particulier | GET | EventController | showMatch | MVP|
|`/event/training/{id}`| Page évenement : entrainement | page affichant un entrainement en particulier | GET | EventController | showTraining | MVP|
|`/event/match/{id}/stats/update`| Ajout scores et stats : match | formulaire d'ajout du score et des stats du match| GET | EventController  | statsUpdate | MVP|
|`/event/match/{id}/stats/update`| Ajout scores et stats : match | traitement formulaire d'ajout du score et des stats du match | POST | EventController  |statsUpdate | MVP|
|`/event/match/{id}/players-selection`| Convocation match | formulaire affichant les joueurs à convoquer pour le match | GET | EventController  | selectionMatch | MVP|
|`/event/match/{id}/players-selection`| Convocation match | traitement formulaire affichant les joueurs à convoquer pour le match | POST | EventController | selectionMatch | MVP|
|`/event/training/{id}/players-selection`| Convocation entrainement | formulaire affichant les joueurs à convoquer pour l'entrainement | GET | EventController  | selectionTraining | MVP|
|`/event/training/{id}/players-selection`| Convocation entrainement | traitement formulaire affichant les joueurs à convoquer pour l'entrainement  | POST | EventController  | selectionTraining | MVP|
|Team|--|--|--|--|--|--|
|`/team/{id}`| Page équipe | page avec informations sur l'équipe | GET | TeamController | show | MVP |
|`/team/add`| Création équipe | formulaire de création d'équipe | GET | TeamController | add | MVP |
|`/team/add`| Création équipe | traitement formulaire de création d'équipe | POST | TeamController | add | MVP |
|`/team/edit/{id}`| Modification équipe | formulaire de modification d'équipe | GET | TeamController | edit | MVP |
|`/team/edit/{id}`| Modification équipe | traitement formulaire de modification d'équipe | POST | TeamController | edit | MVP |
|`/team/delete/{id}`| Supprime une équipe | traitement formulaire suppresion d'équipe | POST | TeamController | delete | MVP|
|`/event/match/{id}/line-up/update`| Faire composition | page création de composition d'équipe | GET | TeamController | update | Hors MVP|
|`/event/match/{id}/line-up/update`| Faire composition | traitement page création de composition d'équipe | POST | TeamController | update | Hors MVP|
|Stats|--|--|--|--|--|--|
|`/stats`| Page statistiques | page listant les statistiques de l'équipe et des joueurs| GET | StatController | home | MVP |
|`/stats#team`| Page statistiques équipe | page d'accueil statistiques de l'équipe | GET | StatController | showStatsTeam | MVP |
|`/stats#players`| Page statistiques joueurs match | page avec l'ensemble des stats par joueurs | GET | StatController | showStatsPlayers | MVP |
|Player|--|--|--|--|--|--|
|`/player/list`| Page liste des joueurs | page listant l'ensemble des joueurs de l'équipe | GET | PlayerController | list | MVP|
|`/player/add`| Ajout joueur fictif | formulaire création joueur| GET | PlayerController| add | MVP |
|`/player/add`| Ajout joueur fictif| traitement formulaire création joueure | POST | PlayerController| add | MV
|`/player/{id}`| Fiche joueur | page avec les informations sur un joueur en particulier | GET | PlayerController | show | MVP |
|`/member/invite`| Invite Membre | formulaire d'invitation du membre | GET | PlayerController| invite | MVP |
|`/member/invite`| Invite Membre | traitement formulaire d'invitation du membre | POST | PlayerController| invite | MVP |
|`/player/edit/{id}`| Modification joueur | formulaire de modification de joueur | GET | PlayerController | edit | MVP |
|`/player/edit/{id}`| Modification joueur | traitement formulaire de modification de joueur | POST | PlayerController | edit | MVP |
|`/player/delete/{id}`| Supprime un joueur | traitement formulaire suppression du joueur | POST | PlayerController | delete | MVP|