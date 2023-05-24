import "bootstrap/dist/css/bootstrap.min.css";
import Card_Docente from "./pages/ReservarCitas/components/Card_Docente";
import Horario from "./pages/ReservarCitas/components/Horario";
import Header from "./pages/ReservarCitas/components/Header";
import "./pages/ReservarCitas/css/Card_Docente.css";
import "./pages/ReservarCitas/css/Curso.css";
import "./pages/ReservarCitas/css/Horario.css";
import "./pages/ReservarCitas/css/Header.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function MyApp(){ //lo que se mostrata
  
  return (
    
    <div>
      <Header/>
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