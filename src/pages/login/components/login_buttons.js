import "../login.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'

function Buttons(){
    return(
        <Container class = "btns">
            <Row>
                <Col>
                    <Button id = "exit">
                        Salir
                    </Button>
                </Col>
                <Col>
                    <Button id = "login">
                        Ingresar
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}


export default Buttons;