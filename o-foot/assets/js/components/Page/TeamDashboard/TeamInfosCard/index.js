import React from 'react';
import Avatar from 'react-avatar';

// Import scss
import './team-infos-card.scss';



const TeamInfosCard = ({ teamData }) => {

  console.log(teamData);
  
  return (
    <div id="teamInfosCard">     
      
      {teamData.map((team) => (
        <>
        <div className="card-header">
          <Avatar className="avatar-custom" src={team.logo_team} size="100" round={true} />
          <div className="card-header-title">
            <h4>{team.team_name}</h4> 
            <p>{team.championship_team}</p>
          </div>                   
        </div>
        
        <div className="card-content">
          <div className="stadium">
            <h6>{team.stadium_team}</h6>
          </div>  
          <div className="address">
            <p>{team.adress_team}</p>
            <p>{team.city_team}</p> 
          </div>
                   
          
        </div>
        </>
      ))}      
      
          
    </div>
  );

};

export default TeamInfosCard;