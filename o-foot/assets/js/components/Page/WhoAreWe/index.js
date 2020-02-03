import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Avatar from 'react-avatar';

// Import scss
import './who-are-we.scss';


const WhoAreWe = () => (
    
    <div id="qui-sommes-nous">
        <header className="header">
            <h1 className="header-h1">
                Mas que un club 
            </h1>
            <div className="">
                <div className="header-title">Créateurs O'Foot</div>
            </div>
        </header>

        <div className ="sections-team">
            <Container>
                <Row className="bloc">
                    <Col lg={4} md={4} sm={4} xs={4} className ="bloc-left">
                        <div className ="">PC</div>
                        <h2 className ="">Product Owner/Symfony</h2>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className ="bloc-center">
                        <Avatar className="Avatar-member"></Avatar>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className ="bloc-1-right">
                        <p className =""><strong>Test</strong>Lorem ipsum</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
);

export default WhoAreWe;
