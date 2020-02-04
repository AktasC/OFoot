export const getTeamInfosById = (id, teams) => {
  // find permet de rechercher le premier élément qui correspond à la condition
  // retourne un seul élément (alors que filter retourne un tableau)
  const searchedTeam = teams.find((team) => (
    team.id === Number(id)
  ));
  return searchedTeam;
};

export const getPlayerInfosById = (id, players) => {
  // find permet de rechercher le premier élément qui correspond à la condition
  // retourne un seul élément (alors que filter retourne un tableau)
  const searchedPlayer = players.find((player) => (
    player.id === Number(id)
  ));
  return searchedPlayer;
};
