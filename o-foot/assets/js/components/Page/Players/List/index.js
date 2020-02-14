// == Import : npm
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Col, Row, Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { IoIosStats, IoIosSend } from 'react-icons/io';
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import Card from '../Card';



// Import scss
import './list.scss';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.props.loadPlayersList();

    this.state = {
      /* Je me retrouve avec 2 modal sur un meme component, l'un pour le Form d'invitation, l'autre pour la Card player */
      show: false,
      show1: false,
      playerId: '',
      mailValue: ''
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log('bien envoyé Roger');
    this.props.handleSubmitInvitePlayer(this.state.mailValue);
  }  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
 
  render() {

    {/* Permet l'ouverture et la fermeture via un state local (non géré par redux ou store) de mes modals Cf le state du dessus */ }
    const handleClose = (value) => {
      this.setState({
        [value]: false,        
      });
    }
    const handleShow = (value) => {      
      this.setState({
        [value]: true,
      });
    }

    const getPlayerId = (value) => {      
      this.setState({
        playerId: value,
      });
    }

    const {currentTeamId} = this.props; 

    return (

      <div id="list">

        <Container>
          <div className="sweatband">
            <h2>LISTE DES JOUEURS</h2>
          </div>

          <Row>
            <Col>
              <Button onClick={() => {handleShow('show') }}><IoIosSend /> Inviter joueur</Button>
              {/* <Button><IoIosAddCircleOutline /> Ajouter joueur</Button> */}
            </Col>
              <NavLink to={`/team/${currentTeamId}`}>
                <Button> Retour au dashboard </Button>
              </NavLink>
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
                    <tr onClick={() => {handleShow('show1'), getPlayerId(`${player.id}`) }}>
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

        <Modal size="lg" show={this.state.show} onHide={() => {handleClose('show') }}>
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
            <Button variant="secondary" onClick={() => {handleClose('show') }}>
              Close
            </Button>            
          </Modal.Footer>
        </Modal>

        <Modal size="lg" show={this.state.show1} onHide={() => {handleClose('show1') }}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Col>
              <Card playerId={this.state.playerId} playersList={this.props.playersList} />
            </Col>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {handleClose('show1') }}>
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

