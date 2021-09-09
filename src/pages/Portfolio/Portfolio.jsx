// import React from "react";
import React, { useState } from "react";
import "../Portfolio/portfolio.scss";
// import "../Portfolio/cards";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalTitle from 'react-bootstrap/ModalTitle';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Portfolio() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div class="portfolio" id="portfoliopage">


            <Container>

                <Row>


                    <Col>
                        <Card>
                            <Card.Img src="https://raw.githubusercontent.com/kwing25/Portfolio/main/src/work/5OClockDrinkGeneratorAppHomeScreenshot.png" />
                            <Card.ImgOverlay>
                                <Card.Title>5 O'Clock Drink Generator</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button id="viewmoreBtn" onClick={handleShow}>
                                    Launch demo modal
            </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>5 O'Clock Drink Generator 🥂</Modal.Title>
                                    </Modal.Header>
                                    <img src="https://raw.githubusercontent.com/kwing25/Portfolio/main/src/work/5OClockDrinkGeneratorAppHomeScreenshot.png" alt="project pic"></img>
                                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                    <Button id="repoBtn" href="https://github.com/kwing25/5-0-Clock-Drink-Generator" onClick={handleClose}>
                                        GitHub Repo
                </Button>
                                    <Button id="liveBtn" href="https://pure-plains-23888.herokuapp.com/" onClick={handleClose}>
                                        Live Site
                </Button>
                                </Modal>
                            </Card.ImgOverlay>


                        </Card>
                    </Col>



                    <Col>
                        <Card>
                            <Card.Img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a31d03ddee66863a599421f792e07b&auto=format&fit=crop&w=700&q=80" />
                            <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button id="viewmoreBtn" onClick={handleShow}>
                                    Launch demo modal
            </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a31d03ddee66863a599421f792e07b&auto=format&fit=crop&w=700&q=80" alt="project pic"></img>
                                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                    <Button id="repoBtn" href="https://www.linkedin.com/in/kendrawing/" onClick={handleClose}>
                                        GitHub Repo
                </Button>
                                    <Button id="liveBtn" href="https://www.linkedin.com/in/kendrawing/" onClick={handleClose}>
                                        Live Site
                </Button>
                                </Modal>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>

                </Row>
            </Container>





        </div>
    )


}