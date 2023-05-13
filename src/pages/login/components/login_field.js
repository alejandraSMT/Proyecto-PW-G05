import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import "../login.css";

function LogInField(){    
    return(
        <Form>
            <Form.Group controlId = 'user-email_input'>
                <FloatingLabel label = "Usuario o Correo" className='input'>
                    <Form.Control type = "text" placeholder = 'Usuario o Correo'>
                    </Form.Control>
                </FloatingLabel>
            </Form.Group>

            <Form.Group controlId = 'password_input'>
                <Form.Label>
                    Usuario o correo
                </Form.Label>

                <Form.Control type = "password">
                </Form.Control>
            </Form.Group>
        </Form>
    );
}

export default LogInField;