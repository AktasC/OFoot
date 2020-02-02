// == Import : npm
import React, { useState } from 'react';
import { Col, Row, Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { IoIosStats, IoIosSend } from 'react-icons/io';
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';


// Import scss
import './list.scss';

class List extends React.Component { 
  constructor(props) {
    super(props);    
    this.props.loadPlayersList();

    this.state = {
      show: false,
      mailValue: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log('bien envoyé Roger')
    this.props.handleSubmitInvitePlayer(this.state.mailValue);
  }  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
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

        <Modal size="lg" show={this.state.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Inviter un joueur :</Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <Col>Renseignez juste son adresse mail, afin de lui envoyer le lien d'invitation</Col>

            <Form id="editInfos" onSubmit={this.onSubmit}>
              <Form.Row>
                <Col className="input" lg={6} md={6} sm={12} xs={12}>
                  <Form.Control
                    onChange={this.handleChange}
                    value={this.state.mailValue}
                    name="mailValue"
                    placeholder="Adresse mail du joueur"
                  />
                </Col>
                <Col className="align">
                  <Button className="custom-btn" type="submit">
                    Lancer l'invitation
                  </Button>
                </Col>                
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>            
          </Modal.Footer>
        </Modal>
          
      </div> 
    )
  }
};

// == Export
export default List;

