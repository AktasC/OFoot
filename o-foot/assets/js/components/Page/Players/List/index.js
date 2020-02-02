// == Import : npm
import React, { useState } from 'react';
import { Col, Row, Container, Table, Button, Modal } from 'react-bootstrap';
import { IoIosStats, IoIosSend, IoIosAddCircleOutline } from 'react-icons/io';
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoMdFootball } from 'react-icons/io';


// Import scss
import './list.scss';

class List extends React.Component { 
  constructor(props) {
    super(props);    
    this.props.loadPlayersList();

    this.state = {
      show: false
    };
  }
  
  render() {

    {/* Permet l'ouverture et la fermeture via un state local (non géré par reux ou store) de ma modal */}
    const handleClose = () => {
      this.setState({
        show: false
      });
    }
    const handleShow = () => {
      this.setState({
        show: true,
      });
    }

    return (      
      
      <div id="list">        

        <Container>
          <div className="sweatband">
            <h2>LISTE DES JOUEURS</h2>
          </div>

          <Row>
            <Col>
              <Button onClick={handleShow}><IoIosSend /> Inviter joueur</Button>
              {/* <Button><IoIosAddCircleOutline /> Ajouter joueur</Button> */}
            </Col>
          </Row>

          <Row className="">
            <Col className="">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Poste</th>                    
                    <th className="smallin">Stats</th>
                    <th className="smallin">Édit.</th>
                    <th className="smallin">Supp.</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.playersList.map((player, i) => (
                    <tr>
                      <td>{i}</td>
                      <td>{player.first_name_player}</td>
                      <td>{player.last_name_player}</td>
                      <td>{player.role_player}</td>                      
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

        <Modal show={this.state.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Inviter un joueur :</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Col><IoMdFootball size={28} /> Rien de plus simple <IoMdFootball size={28}/> </Col>
            <Col>Renseignez juste son adresse mail, afin de lui envoyer le lien d'invitation</Col>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
          
      </div> 
    )
  }
};

// == Export
export default List;

