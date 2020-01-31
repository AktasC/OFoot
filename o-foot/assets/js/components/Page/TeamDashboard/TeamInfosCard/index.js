import React from 'react';
import Avatar from 'react-avatar';

// Import scss
import './team-infos-card.scss';



const TeamInfosCard = ({ teamData }) => {

  /* console.log("teamData:", teamData); */

  const { 
    logo_team,
    team_name,
    championship_team,
    stadium_team,
    address_team,
    city_team
  } = teamData
  
  return (
    <div id="teamInfosCard">  
        
        <div className="card-header">
          <Avatar className="avatar-custom" src={logo_team} size="100" round={true} />
          <div className="card-header-title">
            <h4>{team_name}</h4> 
            <p>{championship_team}</p>
          </div>                   
        </div>
        
        <div className="card-content">
          <div className="stadium">
            <h6>{stadium_team}</h6>
          </div>  
          <div className="address">
            <p>{address_team}</p>
            <p>{city_team}</p> 
          </div>
          
        </div>
          
    </div>
  );

};

export default TeamInfosCard;