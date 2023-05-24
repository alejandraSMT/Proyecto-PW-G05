import { Component } from "react";
import BotonProgCita from "./commons/botones/programar_cita/BotonProgramarCita";

export function NoCitas(){
    return(
        <>
            <div class="general">
                    <div class="container">
                        <div class="row w-100">
                            <div class="col-6 pb-3">
                                <header class="header text-start">Mis Citas</header>
                            </div>
                        </div>
                    </div>
                <hr class="divider"/>
            </div>
            <div class="container">
                <div class="row w-100">
                    <div class="col p-10">
                        <h5>Actualmente no tiene citas de Asesoría reservada</h5>
                        <BotonProgCita/>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default NoCitas;