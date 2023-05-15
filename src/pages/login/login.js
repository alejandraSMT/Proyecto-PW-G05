import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css"
import LogInField from './components/login_field.js';

function LogIn(){
    return (
        <div>
            <div class = "mainBody">
                <h1>Selección de Citas para Atención a Estudiantes</h1>
            </div>
            <div class = "mainBody">
                <LogInField />
            </div>
            
            
        </div>
        
    );
}

export default LogIn;