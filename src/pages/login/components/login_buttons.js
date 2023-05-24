import "../login.css";

import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

function Buttons(){
    return(
        <Form.Group id = "btns">
            <Button id = "exit">
                Salir
            </Button>
            <div style={{width: '30px'}}></div>
            <Button id = "login">
                Ingresar
            </Button>

        </Form.Group>
    );
}

export default Buttons;