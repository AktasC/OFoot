import React from 'react';
import { Button } from 'react-bootstrap';
import Avatar from 'react-avatar';

// Import scss
import './team-card.scss';



const TeamCard = ({ team_name, logo_team }) => { 

  return (
    <div id="teamInfosCard">

      { logo_team != null ? <Avatar className="avatar-custom" src={logo_team} size="100" round={true} /> : <Avatar name={team_name} size="150" size="100" round={true} /> }      
      <h5>{team_name}</h5>
      <Button>Accéder au Dashboard Équipe</Button>
          
    </div>
  );

};

export default TeamCard;