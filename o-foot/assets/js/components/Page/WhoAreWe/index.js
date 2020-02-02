import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

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

        <Container>
            <Row className="bloc-1">
                <Col className ="bloc-1-left">
                    <div className ="">PC</div>
                    <h2 className ="">Product Owner/Symfony</h2>
                </Col>
                <Col className ="bloc-1-center">
                    <Avatar className="Avatar-member"></Avatar>
                </Col>
                <Col className ="bloc-1-right">
                    <p className =""><strong>Test</strong>Lorem ipsum</p>
                </Col>
            </Row>

            <Row className="bloc-2">
                <Col className ="bloc-2-left">
                    <div className ="">PC</div>
                    <h2 className ="">Product Owner/Symfony</h2>
                </Col>
                <Col className ="bloc-2-center">
                    <Avatar className="Avatar-member"></Avatar>
                </Col>
                <Col className ="bloc-2-right">
                    <p className =""><strong>Test</strong>Lorem ipsum</p>
                </Col>
            </Row>

            <Row className="bloc-3">
                <Col className ="bloc-3-left">
                    <div className ="">PC</div>
                    <h2 className ="">Product Owner/Symfony</h2>
                </Col>
                <Col className ="bloc-3-center">
                    <Avatar className="Avatar-member"></Avatar>
                </Col>
                <Col className ="bloc-3-right">
                    <p className =""><strong>Test</strong>Lorem ipsum</p>
                </Col>
            </Row>

            <Row className="bloc-4">
                <Col className ="bloc-4-left">
                    <div className ="">PC</div>
                    <h2 className ="">Product Owner/Symfony</h2>
                </Col>
                <Col className ="bloc-4-center">
                    <Avatar className="Avatar-member"></Avatar>
                </Col>
                <Col className ="bloc-4-right">
                    <p className =""><strong>Test</strong>Lorem ipsum</p>
                </Col>
            </Row>

            <Row className="bloc-5">
                <Col className ="bloc-5-left">
                    <div className ="">PC</div>
                    <h2 className ="">Product Owner/Symfony</h2>
                </Col>
                <Col className ="bloc-5-center">
                    <Avatar className="Avatar-member"></Avatar>
                </Col>
                <Col className ="bloc-5-right">
                    <p className =""><strong>Test</strong>Lorem ipsum</p>
                </Col>
            </Row>
        </Container>
    </div>
);

export default WhoAreWe;
