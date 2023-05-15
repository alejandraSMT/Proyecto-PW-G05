import { useState } from "react";
import "../login.css";

import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FormControl } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function LogInField(){    
    return(
        <Container>
            <br></br>
            <Row>
                <Form.Group>
                    <Form.Label>Usuario o Correo
                    </Form.Label>
                    <Form.Control type = "text">
                    </Form.Control>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group>
                    <Form.Label id = 'password'>Password
                    </Form.Label>
                    <Form.Control type="password"></Form.Control>
                </Form.Group>
            </Row>
        </Container>
    );
}

export default LogInField;