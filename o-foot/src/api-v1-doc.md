# Api interne : O'Foot

Version 1.0

## Les routes

| Routes | Nom de la route | Méthodes (HTTP) |
|---|---|---|
|/api/v1/categories/ | api_v1_categories_list | GET |
|/api/v1/categories/{id} | api_v1_categories_show | GET |
|/api/v1/categories/new | api_v1_categories_new | POST |
|/api/v1/categories/edit/{id} | api_v1_categories_edit | POST |
|/api/v1/categories/delete/{id} | api_v1_categories_delete | DELETE |
|---|---|---|
|/api/v1/compositions/ | api_v1_compositions_list | GET  |
|/api/v1/compositions/{id}  | api_v1_compositions_show | GET |
|/api/v1/compositions/teams/{id}/new| api_v1_compositions_new | POST |
|/api/v1/compositions/edit/{id} | api_v1_compositions_edit | POST |
|/api/v1/compositions/delete/{id} | api_v1_compositions_delete | DELETE |
|---|---|---|
|/api/v1/games/| api_v1_games_list | GET  |
|/api/v1/games/{id}| api_v1_games_show | GET |
|/api/v1/games/teams/{id}/neww| api_v1_games_new | POST |
|/api/v1/games/{team_id}/game/{game_id}/edit-information}| api_v1_games_info_edit| POST |
|/api/v1/games/{team_id}/game/{game_id}/edit-score| api_v1_games_score_edit | POST |
|/api/v1/games/delete/{id}| api_v1_games_delete | DELETE |
|---|---|---|
|/api/v1/players/ | api_v1_players_list | GET  |
|/api/v1/players/{id}  | api_v1_players_show | GET |
|/api/v1/players/new  | api_v1_players_new | POST |
|/api/v1/players/edit/{id} | api_v1_players_edit | POST |
|/api/v1/players/delete/{id} | api_v1_players_delete | DELETE |
|---|---|---|
|/api/v1/positions/| api_v1_positions_list | GET  |
|/api/v1/positions/{id}  | api_v1_positions_show | GET |
|/api/v1/positions/new| api_v1_positions_new | POST |
|/api/v1/positions/edit/{id} | api_v1_positions_edit | POST|
|/api/v1/positions/delete/{id} | api_v1_positions_delete | DELETE |
|---|---|---|
|/api/v1/practices| api_v1_practices_list | GET  |
|/api/v1/practices{id}  | api_v1_practices_show | GET |
|/api/v1/practices/teams/{id}/new| api_v1_practices_new | POST |
|/api/v1/practices/{team_id}/edit/{practice_id} | api_v1_practices_edit | POST |
|/api/v1/practices/delete/{id} | api_v1_practices_delete | DELETE |
|---|---|---|
|/api/v1/tactics| api_v1_tactics_list | GET  |
|/api/v1/tactics/{id}  | api_v1_tactics_show | GET |
|/api/v1/tactics/new| api_v1_tactics_new | POST |
|/api/v1/tactics/edit/{id} | api_v1_tactics_edit | POST |
|/api/v1/tactics/delete/{id} | api_v1_tactics_delete | DELETE |
|---|---|---|
|/api/v1/teams/| api_v1_teams_list | GET  |
|/api/v1/teams/{id}| api_v1_teams_show | GET |
|/api/v1/teams/{id}/players| api_v1_teams_player | GET |
|/api/v1/teams/user/{user_id}/new | api_v1_teams_new | POST |
|/api/v1/teams/edit/{id} | api_v1_teams_edit | POST |
|/api/v1/teams/{id}/remove/{id} | api_v1_teams_leave | DELETE |
|/api/v1/teams/stats/{id} | api_v1_show_stats | GET |
|/api/v1/teams/delete/{id} | api_v1_teams_delete | DELETE |
|/api/v1/teams/{id}/invite | api_v1_teams_invite_player | POST |
|/api/v1/teams/join/{user_id}/{team_id}| api_v1_teams_join_team | POST |
|---|---|---|
|/api/v1/users/ | api_v1_users_list | GET  |
|/api/v1/users/{id}  | api_v1_users_show | GET |
|/api/v1/users/new | api_v1_users_new | POST |
|/api/v1/users/edit/{id} | api_v1_users_edit | POST |
|/api/v1/users/delete/{id} | api_v1_users_delete | DELETE |
|---|---|---|
|/api/register | app_register | POST |
|/api/login| app_login | GET |
|/api/logout| app_logout | GET |
|---|---|---|
|/api/v1/events/team/{id}| list | GET |


## Les contrôleurs

| Routes | Controller | ->méthode() |
|---|---|---|
|/api/v1/categories/ |Api\V1\CategoryController| ->list() |
|/api/v1/categories/{id} |Api\V1\CategoryController| ->show() |
|/api/v1/categories/new|Api\V1\CategoryController| ->new() |
|/api/v1/categories/edit/{id}|Api\V1\CategoryController| ->edit() |
|/api/v1/categories/delete/{id}|Api\V1\CategoryController| ->delete() |
|---|---|---|
|/api/v1/compositions |Api\V1\CompositionController| ->list() |
|/api/v1/compositions/{id} |Api\V1\CompositionController| ->show() |
|/api/v1/compositions/teams/{id}/new|Api\V1\CompositionController| ->new() |
|/api/v1/compositions/edit/{id}|Api\V1\CompositionController| ->edit() |
|/api/v1/compositions/delete/{id} |Api\V1\CompositionController| ->delete() |
|---|---|---|
|/api/v1/games/ | Api\V1\GameController | ->list() |
|/api/v1/games/{id}| Api\V1\GameController| ->show() |
|/api/v1/games/teams/{id}/new | Api\V1\GameController| ->new() |
|/api/v1/games/{team_id}/game/{game_id}/edit-information| Api\V1\GameController| ->editInformation() |
|/api/v1/games/{team_id}/game/{game_id}/edit-score| Api\V1\GameController| ->editScore() |
|/api/v1/games/delete/{id}| Api\V1\GameController| ->delete() |
|---|---|---|
|/api/v1/players/| Api\V1\PlayerController | ->list() |
|/api/v1/players/{id} | Api\V1\PlayerController| ->show() |
|/api/v1/players/new| Api\V1\PlayerController| ->new() |
|/api/v1/players/edit/{id} | Api\V1\PlayerController| ->edit() |
|/api/v1/players/delete/{id}| Api\V1\PlayerController| ->delete() |
|---|---|---|
|/api/v1/positions/| Api\V1\PositionController | ->list() |
|/api/v1/positions/{id}| Api\V1\PositionController | ->show() |
|/api/v1/positions/new| Api\V1\PositionController | ->new() |
|/api/v1/positions/edit/{id}| Api\V1\PositionController | ->edit() |
|/api/v1/positions/delete/{id}| Api\V1\PositionController | ->delete() |
|---|---|---|
|/api/v1/practices| Api\V1\PracticeController | ->list() |
|/api/v1/practices/{id}| Api\V1\PracticeController  | ->show() |
|/api/v1/practices/teams/{id}/new| Api\V1\PracticeController | ->new() |
|/api/v1/practices/{team_id}/edit/{practice_id}| Api\V1\PracticeController  | ->edit() |
|/api/v1/practices/delete/{id}| Api\V1\PracticeController | ->delete() |
|---|---|---|
|/api/v1/tactics| Api\V1\TactiqueController | ->list() |
|/api/v1/tactics/{id}| Api\V1\TactiqueController | ->show() |
|/api/v1/tactics/new| Api\V1\TactiqueController| ->new() |
|/api/v1/tactics/edit/{id}| Api\V1\TactiqueController  | ->edit() |
|/api/v1/tactics/delete/{id}| Api\V1\TactiqueController | ->delete() |
|---|---|---|
|/api/v1/teams/| Api\V1\TeamController | ->list() |
|/api/v1/teams/{id}| Api\V1\TeamController | ->show()|
|/api/v1/teams/{id}/players| Api\V1\TeamController  | ->playersByTeam() |
|/api/v1/teams/user/{user_id}/new | Api\V1\TeamController  | ->new() |
|/api/v1/teams/edit/{id} | Api\V1\TeamController  | ->edit()|
|/api/v1/teams/{id}/remove/{id} | Api\V1\TeamController  | ->delete() |
|/api/v1/teams/stats/{id} | Api\V1\TeamController  | ->showStats() |
|/api/v1/teams/delete/{id} | Api\V1\TeamController  | ->removeUserFromTeam() |
|/api/v1/teams/{id}/invite | Api\V1\TeamController  | ->invitePlayer() |
|/api/v1/teams/join/{user_id}/{team_id} | Api\V1\TeamController  | ->addPlayerInTeamByEmail() |
|---|---|---|
|/api/v1/users/| Api\V1\UserController| ->list() |
|/api/v1/users/{id}| Api\V1\UserController | ->show() |
|/api/v1/users/new | Api\V1\UserController| ->new() |
|/api/v1/users/edit/{id}| Api\V1\UserController | ->edit() |
|/api/v1/users/delete/{id}| Api\V1\UserController| ->delete() |
|---|---|---|
|/api/register | Api\RegistrationController | POST |
|/api/login| Api\SecurityController | GET |
|/api/logout| Api\SecurityController | GET |
|---|---|---|
|/api/v1/events/team/{id}| Api\V1\EventController| ->list() |