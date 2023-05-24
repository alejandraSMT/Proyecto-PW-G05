import {useState} from "react";
import { Calificar } from "../../../../VisualizarCitas/calificar/Calificar";
import './BotonCalificar.css';

function BotonCalificar(){
    const [show,setShow] = useState(false);

    const ShowCard=() =>{
        if(show==true){
            setShow(false)
        }else{
            setShow(true)
        }
    }

    return (
        <>
            <button onClick={ShowCard} class="button" id="calificar">Calificar</button>
            {
                show && (<Calificar/>)
            }
        </>
    );
}

export default BotonCalificar;