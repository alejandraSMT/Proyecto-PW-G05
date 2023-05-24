import "bootstrap/dist/css/bootstrap.min.css"
import "./profile.css"

import PersonalInfo from "./components/personal_info";
import Tabs from "./components/tabs";

function Perfil(){ //todo esto es la pantalla
    return(
        <div id="cuerpo">
            <br></br>
            <h1>
                Mi perfil
            </h1>
            <hr></hr>
            <PersonalInfo />
            <br></br>
            <Tabs />
        </div>
    );
}

export default Perfil;