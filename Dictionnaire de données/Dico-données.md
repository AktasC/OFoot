# Dictionnaire de données

Version 1.0

## Utilisateur (`User`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED|L'identifiant de l'utilisateur|
|Username|VARCHAR(30)|NOT NULL|Le nom d'utilisateur|
|Password|VARCHAR(255)|NOT NULL|Mot de passe|
|Picture|VARCHAR(128)|NULL|Photo de l'utilisateur|
|Email|VARCHAR(60)|NOT NULL|Email de l'utilisateur|
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|Date de création de l'utilisateur|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour de l'utilisateur|
|role_id|entity|NULL|le rôle (entité ROLE)|
|team_id|entity|NULL|l'équipe (entité TEAM)|





## Rôle (`Role`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du rôle|
|name|VARCHAR(30)|NOT NULL|Le nom du rôle|
|created_at|TIMESTAMP|DEFAULT CURRENT_TIMESTAMP|La date de création du rôle|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour du rôle|

## Équipe (`Team`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de l'équipe|
|name|VARCHAR(40)|NOT NULL|Le nom de l'équipe|
|created_at|TIMESTAMP|DEFAULT CURRENT_TIMESTAMP|La date de création de l'équipe|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour de l'équipe|


## Joueur (`Player`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du joueur|
|name|VARCHAR(40)|NOT NULL|Le nom du joueur|
|match|INT|NULL|Le nombre de match joué|
|goal|INT|NULL|Le nombre de but|
|decisive_pass|INT|NULL|Le nombre de passe|
|created_at|TIMESTAMP|DEFAULT CURRENT_TIMESTAMP|La date de création du joueur|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour du joueur|
|team_id|entity|NULL|l'équipe (entité TEAM)|

## Event (`Evénements`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de l'évenement|
|match|VARCHAR(64)|NULL|Match(s)|
|training|VARCHAR(64)|NULL|Entrainement(s)|
|tournaments|VARCHAR(64)|NULL|Tournoi(s)|
|created_at|TIMESTAMP|DEFAULT CURRENT_TIMESTAMP|La date de création de l'événement|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour de l'événement|

## Admin (`Admin`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de l'admin|
|name|VARCHAR(64)|NOT NULL|Le nom de l'admin|
|Email|VARCHAR(60)|NOT NULL|Email de l'admin|
|created_at|TIMESTAMP|DEFAULT CURRENT_TIMESTAMP|La date de création de l'admin|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour de l'admin|
|player_id|entity|NULL|le joueur (entité PLAYER)|
|team_id|entity|NULL|l'équipe (entité TEAM)|
|event_id|entity|NULL|l'évenement (entité EVENT)|

## Category (`Catégorie`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de la catégorie|
|legal_mentions|-|-|-|
|about|-|-|-|
|page_create_team|-|-|-|
|create_event|-|-|-|
|manage_team|-|-|-|
|manage_team|-|-|-|
|created_at|TIMESTAMP|DEFAULT CURRENT_TIMESTAMP|La date de création de la catégorie|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour de la catégorie|
