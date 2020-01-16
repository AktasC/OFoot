# Dictionnaire de données

Version 3.0

## Utilisateur (`User`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED|L'identifiant de l'utilisateur|
|birth_date|DATETIME|NULL|La date de naissance de l'utilisateur|
|email|VARCHAR(60)|NOT NULL|Email de l'utilisateur|
|first_name|VARCHAR(30)|NOT NULL|Prénom de l'utilisateur|
|last_name|VARCHAR(30)|NOT NULL|Nom de famille de l'utilisateur|
|password|VARCHAR(255)|NOT NULL|Mot de passe|
|picture_user|VARCHAR(128)|NULL|Photo de l'utilisateur|
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|Date de création de l'utilisateur|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour de l'utilisateur|

## Équipe (`Team`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id	|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de l'équipe|
|address_team|VARCHAR(255)|	NOT NULL|L'adresse de l'équipe|
|assist_team|SMALLINT|NULL,UNSIGNED|Le nombre total de passe décisive |
|championship_team|VARCHAR(128)|NULL|Le nom du championnat|
|city_team|VARCHAR(255)|NOT NULL|Nom de la ville de l'équipe|
|defeat_team|SMALLINT|NULL,UNSIGNED|Le nombre de défaite total de l'équipe|
|draw_team|SMALLINT|NULL,UNSIGNED|Le nombre de match nul total de l'équipe|
|goal_team|SMALLINT|NULL,UNSIGNED|Nombre de but total de l'équipe|
|logo_team|VARCHAR(128)|NULL|Logo de l'équipe|
|manager_team|SMALLINT|	NOT NULL,UNSIGNED	|L'identifiant du créateur de l'équipe|
|match_team	|SMALLINT|NULL,UNSIGNED	|Nombre de match total|
|presence_team|SMALLINT|NULL,UNSIGNED|Présence des joueurs dans l'équipe|
|red_card_team|TINYINT|	NULL,UNSIGNED|Nombre de carton rouge total de l'équipe|
|stadium_team|VARCHAR(255)|	NOT NULL|Nom du stade de l'équipe|
|team_name|VARCHAR(255)|NOT NULL|Nom de l'équipe|
|practice_team|SMALLINT|NULL,UNSIGNED|Nombre d'entrainement total de l'équipe|
|victory_team|SMALLINT|	NULL,UNSIGNED|Nombre de victoire total de l'équipe|
|yellow_card_team|TINYINT|	NULL,UNSIGNED|Nombre de carton jaune total de l'équipe|
|created_at	|TIMESTAMP|	NOT NULL,DEFAULT CURRENT_TIMESTAMP	|La date de création de l'équipe|
|updated_at	|TIMESTAMP|	NULL|La date de la dernière mise à jour de l'équipe|

## Joueur (`Player`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id	|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du joueur|
|assist_player|SMALLINT|NULL,UNSIGNED|Nombre de passe du joueur|
|defeat_player|SMALLINT|NULL,UNSIGNED|Total de défaite du joueur|
|draw_player|SMALLINT|NULL,UNSIGNED	|Total de match nul du joueur|
|goal_player|SMALLINT|NULL,UNSIGNED	|Total de but du joueur|
|match_player|SMALLINT|	NULL,UNSIGNED|Total de match du joueur|
|number_jersey_player|TINYINT|NOT NULL|Numéro du maillot du joueur |
|picture_player|VARCHAR(128)|NULL|Photo du joueur|
|player_name|VARCHAR(128)|NOT NULL|Nom du joueur|
|position_player|VARCHAR(128)|NULL|Position du joueur sur le terrain|
|red_card_player|TINYINT|NULL,UNSIGNED|Total de carton rouge du joueur|
|role_player|VARCHAR(30)|NOT NULL|Rôle de l'utilisateur dans l'application|
|victory_player|SMALLINT|NULL,UNSIGNED|Total de victoire du joueur|
|yellow_card_player|TINYINT|NULL,UNSIGNED|Total de carton jaune du joueur|
|created_at|TIMESTAMP|NOT NULL,DEFAULT CURRENT_TIMESTAMP|La date de création du joueur|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour du joueur|

## Match (`Match`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id	|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du match|
|address_match|VARCHAR(255)|NULL|Adresse du lieu du match|
|assist_match|SMALLINT|NULL|Nombre de passe par match|
|date_time_match|DATETIME|NULL|Date du match|
|domicile_exterieur|VARCHAR(128)|NULL|Distinction match à domicile et exterieur|
|goal_conceded_team|SMALLINT|NULL|Nombre de but prit par match|
|goal_scored_team|SMALLINT|	NULL|Nombre de but marqué par match|
|opponent_team|	VARCHAR(255)|NULL|Nom de l'équipe adverse pour le match|
|presence_match|SMALLINT|NULL|Nombre de joueur présent par match|
|red_card_match|TINYINT	|NULL|Nombre de carton rouge par match|
|stadium_macth|	VARCHAR(255)|NOT NULL|Nom du stade lors du match|
|yellow_card_match|TINYINT|NULL|Nombre de carton jaune par match|
|created_at|TIMESTAMP|NOT NULL,DEFAULT CURRENT_TIMESTAMP|La date de création de l'événement|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour de l'événement|

## Entraînement (`Practice`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|event_id|entity|NULL|l'évenement (entité EVENT)|
|id	|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de l'entrainement|
|address_practice|VARCHAR(255)|NULL|Adresse du lieu d'entrainement|
|date_time_practice|DATETIME|NULL|Date de l'entrainement|
|presence_practice|	SMALLINT|NULL|Nombre de personne présente à l'entrainement|
|stadium_practice|VARCHAR(255)|NOT NULL|Stade de l'entraînement|
|created_at|TIMESTAMP|NOT NULL,DEFAULT CURRENT_TIMESTAMP	|Date de création de l'événement|
|updated_at	|TIMESTAMP|	NULL|La date de la dernière mise à jour de l'événement|

## Position (`Position`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id	|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de la position|
|position_name|VARCHAR(255)	|NOT NULL|Position du joueur sur le terrain|
|created_at	|TIMESTAMP|NOT NULL,DEFAULT CURRENT_TIMESTAMP|Date de création de la position|
|updated_at	|TIMESTAMP|NULL|La date de la dernière mise à jour de la position|

## Composition (`Composition`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT	|L'identifiant de la composition|
|composition_name|VARCHAR(255)|NOT NULL|Nom de la composition d'équipe|
|created_at|TIMESTAMP|NOT NULL,DEFAULT CURRENT_TIMESTAMP|Date de création de la position|
|updated_at|TIMESTAMP|NULL|La date de la dernière mise à jour de la position|


## Tactique (`Tactique`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id| INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT| L'identifiant de la tactique|
|schema_name| VARCHAR(255) |NOT NULL|Nom du schéma tactique|
|created_at	|TIMESTAMP |NOT NULL,DEFAULT CURRENT_TIMESTAMP|Date de création de la tactique|
|updated_at|TIMESTAMP |	NULL|La date de la dernière mise à jour de la tactique|

