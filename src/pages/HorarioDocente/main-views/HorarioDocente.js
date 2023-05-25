import {DocenteHorario} from "../DocenteHorario/DocenteHorario";

function HorarioDocente() {
  return (
    <div>
      <div className="container">
        <br />
        <h2 className=">Horario">Mis Horarios</h2>
        <hr/>
        <h6>Agregue sus horarios de disponibilidad durante la semana</h6>
        <br />
      </div>
      <div className="container">
        <DocenteHorario/>
      </div>
    </div>
  );
}

export default HorarioDocente;
