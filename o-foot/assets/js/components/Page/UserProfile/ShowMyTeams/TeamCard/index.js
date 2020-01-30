import React from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';

// Import scss
import './team-card.scss';



const TeamCard = ({ team_name, logo_team }) => {
  
  console.log('coucou from card');

  return (
    <div id="teamInfosCard">

      <img className="team-thumb" src={logo_team} />
      <h5>{team_name}</h5>
      <Button>Accéder au Dashboard Équipe</Button>
          
    </div>
  );

};

export default TeamCard;