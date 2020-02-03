// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container, Table, Button, Modal } from 'react-bootstrap';
import { IoIosStats, IoIosSend } from 'react-icons/io';
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoMdFootball } from 'react-icons/io';
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
    };
  }

  render() {

    {/* Permet l'ouverture et la fermeture via un state local (non géré par redux ou store) de mes modals Cf le state du dessus */ }
    const handleClose = (value) => {
      console.log(value);
      this.setState({
        [value]: false,        
      });
    }
    const handleShow = (value) => {
      console.log(value);
      this.setState({
        [value]: true,
      });
    }

    const getPlayerId = (value) => {
      console.log(value);
      this.setState({
        playerId: value,
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
              <Button onClick={() => {handleShow('show') }}><IoIosSend /> Inviter joueur</Button>
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
                    
                      <tr onClick={() => {handleShow('show1'), getPlayerId('1') }}>
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

        <Modal show={this.state.show} onHide={() => {handleClose('show') }}>
          <Modal.Header closeButton>
            <Modal.Title>Inviter un joueur :</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Col><IoMdFootball size={28} /> Rien de plus simple <IoMdFootball size={28} /> </Col>
            <Col>Renseignez juste son adresse mail, afin de lui envoyer le lien d'invitation</Col>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {handleClose('show') }}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {handleClose('show') }}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal size="lg" show={this.state.show1} onHide={() => {handleClose('show1') }}>
          <Modal.Header closeButton>
            <Modal.Title>Fiche Joueur</Modal.Title>
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
            <Button variant="primary" onClick={() => {handleClose('show1') }}>
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

