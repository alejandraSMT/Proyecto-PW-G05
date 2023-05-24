import {Component} from "react";
import { CitasCardAlumno } from "./CitasCardAlumno";

export function CitasViewAlumno(){

    return(
        <div class="container">
            <div class="row d-flex justify-content-right g-3 p-4">
                <div class="col-md-4">
                    <CitasCardAlumno/>
                </div>
                <div class="col-md-4">
                    <CitasCardAlumno/>
                </div>
                <div class="col-md-4">
                    <CitasCardAlumno/>
                </div>
            </div>
        </div>
    );

}

export default CitasViewAlumno;