import "bootstrap/dist/css/bootstrap.min.css";
import CitasHeader from "../commons/citas_header/CitasHeader";
import CitasView from "./subviews/CitasView";
import Header from "../../Header/Header";

function CitasPasadasView() {
  const citasProfesores = [
    {
      nombre: 'John Doe',
      carrera: 'Ingeniería Informática',
      horario: 'Martes y Jueves 10:00 - 11:00 a.m',
      curso: 'Informática para la gestión',
      calificacion: '5,0'
    },
    {
      nombre: 'Jane Smith',
      carrera: 'Ingeniería de Sistemas',
      horario: 'Miércoles y Viernes 9:00 - 10:00 a.m',
      curso: 'Comunicación de datos',
      calificacion: '3,5'
    }
  ]

  return (
    <div className="App">
      <Header/>
      <CitasHeader/>
      <CitasView citasProfesores = {citasProfesores}/>
    </div>
    
  );
}

export default CitasPasadasView;