import { Component } from "react";
import "./CitasCard.css"
import logo from "./morado.png"
import logo1 from './flowers_placeholder.jpg'
import BotonCalificar from "./commons/botones/calificar_atencion/BotonCalificar";

export function CitasCard(){
    return(
        <>
            <div class="card" >
                <div class="container">
                    <div class="row">
                        <div class="col-3 mt-3">
                            <div class="member d-flex align-items-start">
                                <div class="memberpic">
                                    <img class="rounded-circle" src={logo}/>
                                </div>
                            </div>
                        </div>
                        <div class="col-9 mt-3 d-flex align-items-start">
                            <div class="member-info">
                                    <h5 class="card-title">Nombre Apellido</h5>
                                    <p class="card-text text-start pb-2"><small class="text-muted">Especialidad</small></p>
                                </div>
                        </div>
                    </div>
                </div>
                <img src={logo1} class="img-fluid"/>
                <div class="card-body d-flex">
                    <div class="cita-info">
                        <h5 class="card-title text-start">Horario</h5>
                        <p class="card-text text-start"><small class="text-muted">Curso: Nombre</small></p>
                        <a class="card-text text-start" href="https://www.youtube.com/watch?v=-GQg25oP0S4" className="focus" target="_blank">Enlace de zoom</a>
                    </div>
                </div>
                <div className="">
                    <div class="card-body">
                        <div class="row justify-content-end">
                            <div class="col text-end">
                                <p>Calificación: 4,5 </p>
                            </div>
                            <div class="col text-end">
                                <BotonCalificar/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CitasCard;