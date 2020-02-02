import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

// Import scss
import './show-my-teams.scss';

import Slider from 'react-slick';
import TeamCard from '../../../../containers/UserProfile/ShowMyTeams/TeamCard';

const showMyTeams = ( teams ) => {

  console.log("depuis ShowMyTeam:", teams);
  // On ne peut maper que sur un array [] je transforme donc mon objet recu de mon composant parent en array
  var arrTeams = Object.values(teams);

  console.log("arrTeams:", arrTeams);

  

  /* Fix pour résoudre le problème d'affichage du slider si une seule équipe est listé sur le UserProfile */

  let nbSlideToShow = '';

  if (arrTeams[0].length === 1) {    
    nbSlideToShow = 1
  } else {
    nbSlideToShow = 2
  }
  
  
  
  const settings = {   
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: nbSlideToShow,
    slidesToScroll: 2, 
  };  

  return (
   
    <div id="showMyTeams">      
      <Row>
        <Col md={12} > 
          <Slider {...settings}>          
          {arrTeams[0].map((team, i) => (
            <TeamCard key={i}  team={team} />
          ))}
          </Slider>
        </Col>
      </Row>
    </div>
  )
};

showMyTeams.propTypes = {
  /* teams: PropTypes.object.isRequired, */
};

export default showMyTeams;