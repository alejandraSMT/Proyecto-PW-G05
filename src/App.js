import "bootstrap/dist/css/bootstrap.min.css";
import Card_Docente from "./components/Card_Docente";
import Horario from "./components/Horario";
import "./components/css/estilos.css"

function MyApp(){ //lo que se mostrata
  return (
    
    <div>
      
      <div class="container">
        <br/>
        <h1>Citas</h1> 
        <hr/>
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