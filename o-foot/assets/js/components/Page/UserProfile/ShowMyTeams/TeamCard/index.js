import React from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';

// Import scss
import './team-card.scss';



const TeamCard = ({ team_name, team_img }) => {
  
  return (
    <div id="teamInfosCard">

      <img className="team-thumb" src={team_img} />
      <h5>{team_name}</h5>
      <Button>Accéder au Dashboard Équipe</Button>
          
    </div>
  );

};

export default TeamCard;