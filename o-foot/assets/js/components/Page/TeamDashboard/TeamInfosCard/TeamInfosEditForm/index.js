import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import $ from 'jquery';
require('bootstrap/js/dist/modal');
// Import scss
import './team-infos-edit-form.scss';

class TeamInfosEditForm extends React.Component {
  constructor(props) {    
    super(props); 
    console.log("SUPERPROOOPS:", props); 
    this.state = {
      teamNameValue: this.props.teamInfos.team_name,
      teamStadiumValue: this.props.teamInfos.stadium_team,
      teamAddressValue: this.props.teamInfos.address_team,
      teamCityValue: this.props.teamInfos.city_team,
      show: this.props.show,
    };
  }  

  onSubmit = (event) => {
    event.preventDefault();
    console.log("hey submit ");
    this.props.onSubmitUpdateTeamInfos(this.state);
    /* $('.dialog').css("display", "none");
    $('.modal-backdrop').css("display", "none");
    $('.modal').css("display", "none"); */
    $('#teamInfosCard').modal('toggle');
  }

  onClose = () => {
    console.log("hey CLOSE "); 
    this.setState({
      show: false
    })    
  }

  handleChange = (event) => {  
    this.setState({
      [event.target.name]: event.target.value
    });
  }    

  render() {

     const {
      teamNameValue,
      teamStadiumValue,
      teamAddressValue,
      teamCityValue
    }  = this.state;
   
    return (
      <div id="teamInfosEditForm">    

        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} sm={{ span: 8, offset: 2 }} xs={{ span: 8, offset: 2 }}> 
              <Form id="editInfos" onSubmit={this.onSubmit}>
                <Form.Row>                
                  <Col className="input" lg={6} md={6} sm={21} xs={12}>
                    <Form.Control                    
                      onChange={this.handleChange}
                      value={teamNameValue}                
                      name="teamNameValue"
                      placeholder="Nom de votre équipe"
                    />
                  </Col>

                  <Col className="input" lg={6} md={6} sm={21} xs={12}>
                    <Form.Control
                      onChange={this.handleChange}
                      value={teamStadiumValue}
                      name="teamStadiumValue"
                      placeholder="Nom du Stade"
                    />
                  </Col>
                </Form.Row>

                <Form.Row>                
                  <Col className="input" lg={6} md={6} sm={21} xs={12}>
                    <Form.Control                    
                      onChange={this.handleChange}
                      value={teamAddressValue}                
                      name="teamAddressValue"
                      placeholder="Adresse de votre équipe"
                    />
                  </Col>

                  <Col className="input" lg={6} md={6} sm={21} xs={12}>
                    <Form.Control
                      onChange={this.handleChange}
                      value={teamCityValue}
                      name="teamCityValue"
                      placeholder="Ville du stade"
                    />
                  </Col>
                </Form.Row>                      

                <Button type="submit" onClick={this.onClose}>Modifier les informations</Button>
              </Form>
            </Col>            
          </Row>
        </Container>
      </div>
    )
  }
};

export default TeamInfosEditForm;