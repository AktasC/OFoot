import React from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';

// Import scss
import './team-card.scss';



const TeamCard = ({ team_name, team_img }) => {
  
  return (
    <div id="teamCard">

      <img className="team-thumb" src={team_img} />
      <h3>{team_name}</h3>
      <Button>Accéder au Dashboard</Button>
          
    </div>
  );

};

export default TeamCard;