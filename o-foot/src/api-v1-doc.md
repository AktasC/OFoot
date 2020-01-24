# Api interne : O'Foot

Version 1.0

## Les routes

| Routes | Nom de la route | Méthodes (HTTP) |
|---|---|---|
|/api/v1/categories | api_v1_categories_list | GET  |
|/api/v1/categories/{id}  | api_v1_categories_show | GET |
|/api/v1/categories| api_v1_categoriesnew | POST |
|/api/v1/categories/{id} | api_v1_categories_edit | PUT |
|/api/v1/categories/{id} | api_v1_categories_delete | DELETE |
|---|---|---|
|/api/v1/compositions | api_v1_compositions_list | GET  |
|/api/v1/compositions/{id}  | api_v1_compositions_show | GET |
|/api/v1/compositions| api_v1_compositions_new | POST |
|/api/v1/compositions/{id} | api_v1_compositions_edit | PUT |
|/api/v1/compositions/{id} | api_v1_compositions_delete | DELETE |
|---|---|---|
|/api/v1/games| api_v1_games_list | GET  |
|/api/v1/games/{id}| api_v1_games_show | GET |
|/api/v1/games| api_v1_games_new | POST |
|/api/v1/games /{id}| api_v1_games_info_edit | PUT |
|/api/v1/games /{id}| api_v1_games_stats_edit | PUT |
|/api/v1/games /{id}| api_v1_games_delete | DELETE |
|---|---|---|
|/api/v1/players | api_v1_players_list | GET  |
|/api/v1/players /{id}  | api_v1_players_show | GET |
|/api/v1/players  | api_v1_players_new | POST |
|/api/v1/players /{id} | api_v1_players_edit | PUT |
|/api/v1/players /{id} | api_v1_players_delete | DELETE |
|---|---|---|
|/api/v1/positions| api_v1_positions_list | GET  |
|/api/v1/positions/{id}  | api_v1_positions_show | GET |
|/api/v1/positions| api_v1_positions_new | POST |
|/api/v1/positions/{id} | api_v1_positions_edit | PUT |
|/api/v1/positions/{id} | api_v1_positions_delete | DELETE |
|---|---|---|
|/api/v1/practices| api_v1_practices_list | GET  |
|/api/v1/practices{id}  | api_v1_practices_show | GET |
|/api/v1/practices| api_v1_practices_new | POST |
|/api/v1/practices/{id} | api_v1_practices_edit | PUT |
|/api/v1/practices/{id} | api_v1_practices_delete | DELETE |
|---|---|---|
|/api/v1/tactics| api_v1_tactics_list | GET  |
|/api/v1/tactics/{id}  | api_v1_tactics_show | GET |
|/api/v1/tactics| api_v1_tactics_new | POST |
|/api/v1/tactics/{id} | api_v1_tactics_edit | PUT |
|/api/v1/tactics/{id} | api_v1_tactics_delete | DELETE |
|---|---|---|
|/api/v1/teams| api_v1_teams_list | GET  |
|/api/v1/teams/{id}  | api_v1_teams_show | GET |
|/api/v1/teams | api_v1_teams_new | POST |
|/api/v1/teams/{id} | api_v1_teams_edit | PUT |
|/api/v1/teams/{id} | api_v1_teams_delete | DELETE |
|---|---|---|
|/api/v1/users | api_v1_users_list | GET  |
|/api/v1/users/{id}  | api_v1_users_show | GET |
|/api/v1/users | api_v1_users_new | POST |
|/api/v1/users/{id} | api_v1_users_edit | PUT |
|/api/v1/users/{id} | api_v1_users_delete | DELETE |


## Les contrôleurs

| Routes | Controller | ->méthode() |
|---|---|---|
|/api/v1/categories |Api\V1\CategoryController| ->list() |
|/api/v1/categories/{id} |Api\V1\CategoryController| ->show() |
|/api/v1/categories|Api\V1\CategoryController| ->new() |
|/api/v1/categories/{id} |Api\V1\CategoryController| ->edit() |
|/api/v1/categories/{id} |Api\V1\CategoryController| ->delete() |
|---|---|---|
|/api/v1/compositions |Api\V1\CompositionController| ->list() |
|/api/v1/compositions/{id} |Api\V1\CompositionController| ->show() |
|/api/v1/compositions|Api\V1\CompositionController| ->new() |
|/api/v1/compositions/{id} |Api\V1\CompositionController| ->edit() |
|/api/v1/compositions/{id} |Api\V1\CompositionController| ->delete() |
|---|---|---|
|/api/v1/games | Api\V1\GameController | ->list() |
|/api/v1/games /{id} | Api\V1\GameController| ->show() |
|/api/v1/games | Api\V1\GameController| ->new() |
|/api/v1/games /{id} | Api\V1\GameController| ->editInfos() |
|/api/v1/games /{id} | Api\V1\GameController| ->editStats() |
|/api/v1/games /{id} | Api\V1\GameController| ->delete() |
|---|---|---|
|/api/v1/players| Api\V1\PlayerController | ->list() |
|/api/v1/players/{id} | Api\V1\PlayerController| ->show() |
|/api/v1/players| Api\V1\PlayerController| ->new() |
|/api/v1/players/{id} | Api\V1\PlayerController| ->edit() |
|/api/v1/players/{id} | Api\V1\PlayerController| ->delete() |
|---|---|---|
|/api/v1/positions| Api\V1\PositionController | ->list() |
|/api/v1/positions/{id}| Api\V1\PositionController | ->show() |
|/api/v1/positions| Api\V1\PositionController | ->new() |
|/api/v1/positions/{id}| Api\V1\PositionController | ->edit() |
|/api/v1/positions/{id}| Api\V1\PositionController | ->delete() |
|---|---|---|
|/api/v1/practices| Api\V1\PracticeController | ->list() |
|/api/v1/practices/{id}| Api\V1\PracticeController  | ->show() |
|/api/v1/practices| Api\V1\PracticeController | ->new() |
|/api/v1/practices/{id}| Api\V1\PracticeController  | ->edit() |
|/api/v1/practices/{id}| Api\V1\PracticeController | ->delete() |
|---|---|---|
|/api/v1/tactics| Api\V1\TactiqueController | ->list() |
|/api/v1/tactics/{id}| Api\V1\TactiqueController | ->show() |
|/api/v1/tactics| Api\V1\TactiqueController| ->new() |
|/api/v1/tactics/{id}| Api\V1\TactiqueController  | ->edit() |
|/api/v1/tactics/{id}| Api\V1\TactiqueController | ->delete() |
|---|---|---|
|/api/v1/teams| Api\V1\TeamController | ->list() |
|/api/v1/teams/{id}| Api\V1\TeamController  | ->show() |
|/api/v1/teams| Api\V1\TeamController | ->new() |
|/api/v1/teams/{id}| Api\V1\TeamController  | ->edit() |
|/api/v1/teams/{id}| Api\V1\TeamController | ->delete() |
|---|---|---|
|/api/v1/users| Api\V1\UserController| ->list() |
|/api/v1/users/{id}| Api\V1\UserController | ->show() |
|/api/v1/users| Api\V1\UserController| ->new() |
|/api/v1/users/{id}| Api\V1\UserController | ->edit() |
|/api/v1/users/{id}| Api\V1\UserController| ->delete() |