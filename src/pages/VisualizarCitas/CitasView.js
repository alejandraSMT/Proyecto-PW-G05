import {Component} from "react";
import { CitasCard } from "./CitasCard";
import {Calificar} from "../VisualizarCitas/calificar/Calificar"

export function CitasView(){

    return(
        <div class="container">
            <div class="row d-flex justify-content-right g-3 p-4">
                <div class="col-md-4">
                    <CitasCard/>
                </div>
                <div class="col-md-4">
                    <CitasCard/>
                </div>
                <div class="col-md-4">
                    <CitasCard/>
                </div>
            </div>
        </div>
    );

}

export default CitasView;