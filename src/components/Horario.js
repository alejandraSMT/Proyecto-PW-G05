import {Component} from "react";

const cursos = ["CURSO #1", "CURSO #2","CURSO #3", "CURSO #4"];
const horarios = ["HORARIO #1", "HORARIO #2","HORARIO #3", "HORARIO #4"];


/*
const horario = document.getElementById("horario-seleccionado");
const horario_valor = horario.value;
*/

export class Horario extends Component{
    MostrarReserva(horario_valor) {
        const fechaInput = document.getElementById("fecha");
        const fecha_valor = fechaInput.value;
        alert('Reserva de cita' + '\n' +
         'Usted ha reservado la cita exitosamente para el ' + fecha_valor + 
         ' a las '+ horario_valor + '. Encontrara el detalle en su pagina de citas.');
    };
    

    render(){ //obligatorio
        return (
            <div class="container">

                <div class="row">

                    <div class="col">
                        <sup>Ingrese una Fecha</sup>
                        <input type="date" id="fecha"></input>
                    </div>
                    
                    <div class="col">
                        <sup>Curso de interes</sup>
                        <select>
                            <option value="" disabled selected>
                                Seleccione un curso
                            </option>
                            {cursos.map((curso, index) => (
                                <option key={index} value={curso}>
                                {curso}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
               
               <br/>
               
                <div class="row">
                <div className="lista-container">
                    {horarios.map((elemento, index) => (
                     <button onClick={this.MostrarReserva.bind(this,elemento)} key={index} className="estilo-horario" id="horario">
                        <b>{elemento}</b>
                    </button>
                    
                 ))}
                </div>
                </div>

            </div>
        );
    }
}

export default Horario;
