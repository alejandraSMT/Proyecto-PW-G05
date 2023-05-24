import "bootstrap/dist/css/bootstrap.min.css";
//import BotonProgCita from "./citas/commons/programar_cita/BotonProgramarCita";
//import BotonVerCita from "./citas/commons/ver_cita/BotonVerCita";
import CitasHeader from "./citas/commons/citas_header/CitasHeader";
import { CitasView } from "./citas/CitasView";
import { CitasViewAlumno } from "./citas/CitasViewAlumno";
import NoCitas from "./citas/NoCitas";

function App() {
  return (
    <div className="App">
      <CitasHeader/>
      <CitasView/>
    </div>
    
  );
}

export default App;