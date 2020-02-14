import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Avatar from 'react-avatar';

// Import scss
import './team-card.scss';


const TeamCard = ({ team, handleUpdateCurrentTeamId }) => {
  const {
    logo_team,
    team_name,
    id,
  } = team;

  const updateTeamId = () => {
    console.log('je met à jour', id);
    handleUpdateCurrentTeamId(id);
  };

  return (
    <div id="teamInfosCard">

      { logo_team != null ? <Avatar className="avatar-custom" src={logo_team} size="100" round /> : <Avatar name={team_name} size="150" size="100" round /> }
      <h5>{team_name}</h5>

      <NavLink to={`/team/${id}`} className="link">
        <Button onClick={updateTeamId}>Accéder au Dashboard Équipe</Button>
      </NavLink>

    </div>
  );
};

export default TeamCard;