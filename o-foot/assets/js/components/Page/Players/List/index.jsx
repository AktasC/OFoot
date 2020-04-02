// == Import : npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Col, Row, Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

import { IoIosStats, IoIosSend, IoIosArrowBack } from 'react-icons/io';
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

import Card from '../Card';

// Import scss
import './list.scss';

const List = ({ playersList, currentTeamId, onSubmit, isManager }) => {

  const { handleSubmit, register, errors, triggerValidation } = useForm();

  {/* Permet l'ouverture et la fermeture via un state local (non géré par redux ou store) de mes modals Cf le state du dessus */ }
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [playerId, setPlayerId] = useState();

  const onSubmitForm = (data, e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (

    <div id="list">

      <Container>
        <div className="sweatband">
          <h2>LISTE DES JOUEURS</h2>
        </div>

        <div className="buttons">
          <NavLink to={`/team/${currentTeamId}`}>
            <Button>
              <IoIosArrowBack />
              Retour au dashboard
            </Button>
          </NavLink>
          {isManager && (
            <Button onClick={() => {setShow(true); }}>
              <IoIosSend />
              Inviter joueur
            </Button>
          )}
          {/* <Button><IoIosAddCircleOutline /> Ajouter joueur</Button> */}
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
                  <th className="smallin">Stats</th>
                  {isManager && (
                    <>
                      <th className="smallin">Édit.</th>
                      <th className="smallin">Supp.</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {playersList.map((player, i) => (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{player.first_name_player}</td>
                    <td>{player.last_name_player}</td>
                    <td>{player.role_player}</td>
                    <td
                      className="clikable"
                      onClick={() => {setShow1(true), setPlayerId(Number(`${player.id}`))}}
                    >
                      <IoIosStats />
                    </td>
                    {isManager && (
                      <>
                        <td className="clikable"><FiEdit3 /></td>
                        <td className="clikable"><AiOutlineDelete /></td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Inviter un joueur :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>Renseignez juste son adresse mail, afin de lui envoyer le lien d'invitation</Col>

          <Form id="editInfos" onSubmit={handleSubmit(onSubmitForm)}>
            <Form.Row>
              <Col className="input" lg={6} md={6} sm={12} xs={12}>
                <Form.Control
                  className={classNames('form-control', { wrong: errors.email })}
                  onBlur={() => triggerValidation('email')}
                  onChange={() => triggerValidation('email')}
                  name="email"
                  ref={register({
                    required: 'Champs requis',
                  })}
                />
                {errors.email && errors.email.message}
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
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={show1} onHide={() => setShow1(false)}>
        <Modal.Header closeButton>
          <Modal.Title />
        </Modal.Header>
        <Modal.Body>
          <Col>
            <Card playerId={playerId} playersList={playersList} />
          </Col>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow1(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

List.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isManager: PropTypes.bool.isRequired,
  currentTeamId: PropTypes.number.isRequired,
  playersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name_player: PropTypes.string.isRequired,
      last_name_player: PropTypes.string.isRequired,
      role_player: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// == Export
export default List;
