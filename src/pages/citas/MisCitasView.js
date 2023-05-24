import "bootstrap/dist/css/bootstrap.min.css";
//import BotonProgCita from "./citas/commons/programar_cita/BotonProgramarCita";
//import BotonVerCita from "./citas/commons/ver_cita/BotonVerCita";
import CitasHeader from "./commons/citas_header/CitasHeader";
import { CitasView } from "./CitasView";
import { CitasViewAlumno } from "./CitasViewAlumno";
import NoCitas from "./NoCitas";

function App() {
  return (
    <div className="App">
      <CitasHeader/>
      <CitasView/>
    </div>
    
  );
}

export default App;