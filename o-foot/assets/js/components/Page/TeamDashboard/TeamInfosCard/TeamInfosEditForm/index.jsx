import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

// Import scss
import './team-infos-edit-form.scss';

const TeamInfosEditForm = ({ teamInfos, onSubmitUpdateTeamInfos }) => {
  const { handleSubmit, register, errors, triggerValidation, reset } = useForm({
    defaultValues: teamInfos,
  });

  useEffect(() => {
    if (teamInfos) {
      reset(teamInfos);
    }
  }, [teamInfos, reset]);

  const onSubmitForm = (data, e) => {
    e.preventDefault();
    onSubmitUpdateTeamInfos(data);
  };

  return (
    <div id="teamInfosEditForm">

      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 2 }} xs={{ span: 8, offset: 2 }}>
            <Form onSubmit={handleSubmit(onSubmitForm)}>
              <Form.Row>
                <Col className="input" lg={6} md={12} sm={12} xs={12}>
                  <Form.Control
                    className={classNames('form-control', { wrong: errors.team_name })}
                    onBlur={() => triggerValidation('team_name')}
                    onChange={() => triggerValidation('team_name')}
                    name="team_name"
                    ref={register({
                      required: 'Champs requis',
                    })}
                  />
                  {errors.team_name && errors.team_name.message}
                </Col>

                <Col className="input" lg={6} md={12} sm={12} xs={12}>
                  <Form.Control
                    className={classNames('form-control', { wrong: errors.stadium_team })}
                    onBlur={() => triggerValidation('stadium_team')}
                    onChange={() => triggerValidation('stadium_team')}
                    name="stadium_team"
                    ref={register({
                      required: 'Champs requis',
                    })}
                  />
                  {errors.stadium_team && errors.stadium_team.message}
                </Col>
              </Form.Row>

              <Form.Row>
                <Col className="input" lg={6} md={12} sm={12} xs={12}>
                  <Form.Control
                    className={classNames('form-control', { wrong: errors.address_team })}
                    onBlur={() => triggerValidation('address_team')}
                    onChange={() => triggerValidation('address_team')}
                    name="address_team"
                    ref={register({
                      required: 'Champs requis',
                    })}
                  />
                  {errors.address_team && errors.address_team.message}
                </Col>

                <Col className="input" lg={6} md={12} sm={12} xs={12}>
                  <Form.Control
                    className={classNames('form-control', { wrong: errors.city_team })}
                    onBlur={() => triggerValidation('city_team')}
                    onChange={() => triggerValidation('city_team')}
                    name="city_team"
                    ref={register({
                      required: 'Champs requis',
                    })}
                  />
                  {errors.city_team && errors.city_team.message}
                </Col>
              </Form.Row>

              <Button className="custom-btn" type="submit">Modifier les informations</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

TeamInfosEditForm.propTypes = {
  teamInfos: PropTypes.objectOf(
    PropTypes.shape({
      team_name: PropTypes.string.isRequired,
      stadium_team: PropTypes.string.isRequired,
      address_team: PropTypes.string.isRequired,
      city_team: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onSubmitUpdateTeamInfos: PropTypes.func.isRequired,
};

export default TeamInfosEditForm;