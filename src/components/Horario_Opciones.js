import {Component} from "react";
import mostrarReserva from "./Horario"
const horarios = ["HORARIO #1", "HORARIO #2","HORARIO #3", "HORARIO #4"];


export class Horario_Opciones extends Component{
    

    render(){ //obligatorio
        return (
            <div className="lista-container">
            {horarios.map((elemento, index) => (
              <button onClick={mostrarReserva} key={index} className="lista-elemento" id="btn">
                {elemento}
              </button>
            ))}
          </div>
            );
    }
}

export default Horario_Opciones;