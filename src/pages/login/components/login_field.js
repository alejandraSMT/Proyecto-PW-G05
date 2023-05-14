import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "../login.css";

function LogInField(){    
    return(
        <Form>
            <Form.Group controlId = 'user-email_input'>
                <FloatingLabel label = "Usuario o Correo">
                    <Form.Control type = "text" placeholder = 'Usuario o Correo'>
                    </Form.Control>
                </FloatingLabel>
            </Form.Group>
            <br></br>
            <Form.Group controlId = 'password_input'>
                <FloatingLabel label = "Contraseña">
                    <Form.Control type = "password" placeholder = 'Contraseña'>
                    </Form.Control>
                </FloatingLabel>
            </Form.Group>
        </Form>
    );
}

export default LogInField;