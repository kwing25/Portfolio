import React from "react";
import "../Contact/contact.scss";

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function Contact() {
    return (
        <div class="contact" id="contactpage">

            <h1 id="page-title">Contact Me 👋</h1>

            <Container className="contact-form">
                <Form className="contact">
                    <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label column sm="4">Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label column sm="2">Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Type me a message!" />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </Form>


            </Container>

            <Navbar fixed="bottom">
                <Container>

                    <Nav id="bottom-nav">

                        <Nav.Link href="https://www.linkedin.com/in/kendrawing/">
                            <LinkedInIcon className="icon" />
                        </Nav.Link>
                        <Nav.Link href="https://github.com/kwing25">
                            <GitHubIcon className="icon" />
                        </Nav.Link>
                        <Nav.Link href="https://twitter.com/kennyk1995">
                            <TwitterIcon className="icon" />
                        </Nav.Link>
                        <Nav.Link href="kendrawingpro@icloud.com">
                            <EmailIcon className="icon" />
                            kendrawingpro@icloud.com
                        </Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
}
