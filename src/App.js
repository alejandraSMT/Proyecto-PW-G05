import "bootstrap/dist/css/bootstrap.min.css";
import Card_Docente from "./components/Card_Docente";
import Horario from "./components/Horario";
import "./css/Card_Docente.css"
import "./css/Curso.css"
import "./css/Horario.css"

function MyApp(){ //lo que se mostrata
  return (
    
    <div>
      
      <div class="container">
        <br/>
        <h1>Citas</h1> 
        
        <Card_Docente/>  
     
      </div>

      <br/>

      <div class="container">

        <b>Fechas y horarios disponibles</b>
        <hr/>

        <Horario/>
        <br/>
              <li>Las sesiones son de 30 minutos</li>
        <br/>     
      </div>
      
    </div> 
    
  );
}

export default MyApp;