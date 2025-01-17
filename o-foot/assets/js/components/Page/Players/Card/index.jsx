// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'react-bootstrap';
import Avatar from 'react-avatar';

import { getPlayerInfosById } from 'Utils/selectors/selectors';

// Import scss
import './card.scss';

const Card = ({ playerId, playersList }) => {
  const playerInfo = getPlayerInfosById(playerId, playersList);

  return (

    <div id="card">

      <Container>
        <div className="sweatband">
          <h2>FICHE JOUEUR</h2>
        </div>

        <Row>
          <Col lg={6} md={12} sm={12} xs={12} className="left-part">
            <div className="inline-infos">
              <div className="number-jersey">{playerInfo.number_jersey_player}</div>
              <div className="avatar">
                { playerInfo.picture_player != null ? <Avatar className="avatar-custom" src={playerInfo.picture_player} size="100" round /> : <Avatar name={`${playerInfo.first_name_player} ${playerInfo.last_name_player}`} size="100" round /> }
              </div>
              <div className="infos">
                <div className="player-name">
                  {playerInfo.first_name_player}
                  {' '}
                  {playerInfo.last_name_player}
                </div>
                <div className="player-role">{playerInfo.role_player}</div>
              </div>

            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12} className="stats">
            <div className="stats-line">
              <div className="stats-block goals">
                <img className="stats-icons" src="/img/player_card/stats/goal.svg" alt="scoring goal" />
                <div className="stats-value">{playerInfo.goal_player}</div>
              </div>
              <div className="stats-block assists">
                <img className="stats-icons" src="/img/player_card/stats/boot.svg" alt="assist goal" />
                <div className="stats-value">{playerInfo.assist_player}</div>
              </div>
              <div className="stats-block yellow-card">
                <img className="stats-icons" src="/img/player_card/stats/yellow.svg" alt="yellow card" />
                <div className="stats-value">{playerInfo.yellow_card_player}</div>
              </div>
              <div className="stats-block red-card">
                <img className="stats-icons" src="/img/player_card/stats/red.svg" alt="red card" />
                <div className="stats-value">{playerInfo.red_card_player}</div>
              </div>
            </div>
            <div className="stats-line">
              <div className="stats-block victory">
                <div>Vict</div>
                <div className="stats-value">{playerInfo.victory_player}</div>
              </div>
              <div className="stats-block draw">
                <div>Nuls</div>
                <div className="stats-value">{playerInfo.draw_player}</div>
              </div>
              <div className="stats-block defeat">
                <div>Déf.</div>
                <div className="stats-value">{playerInfo.defeat_player}</div>
              </div>
            </div>
          </Col>
        </Row>

      </Container>

    </div>
  );
};

Card.propTypes = {
  playerId: PropTypes.number,
  playersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name_player: PropTypes.string.isRequired,
      last_name_player: PropTypes.string.isRequired,
      role_player: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Card.defaultProps = {
  playerId: 0,
};


// == Export
export default Card;
