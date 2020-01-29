// == Import : npm
import React from 'react';
import { Col, Row, Container, Table } from 'react-bootstrap';
import { IoIosStats } from 'react-icons/io';
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

// Import scss
import './list.scss';

import players from './players.json';

const List = () => {  


  return (
    
      <div id="list">        

        <Container>
          <div className="sweatband">
            <h2>LISTE DES JOUEURS</h2>
          </div>

          <Row className="">
            <Col className="">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Poste</th>
                    <th>Status</th>
                    <th>Stats</th>
                    <th>Éditer</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player, i) => (
                    <tr>
                      <td>{i}</td>
                      <td>{player.player_firstname}</td>
                      <td>{player.player_lastname}</td>
                      <td>{player.position_player}</td>
                      <td>En attente</td>
                      <td><IoIosStats /></td>
                      <td><FiEdit3 /></td>
                      <td><AiOutlineDelete /></td>
                    </tr>     
                  ))}
                              
                </tbody>
              </Table>
            </Col> 
          </Row> 
        </Container>
          
      </div>    
    
  )
};

// == Export
export default List;

