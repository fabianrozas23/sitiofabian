import React from 'react';
import { Link } from 'react-router-dom';
import Formulario2 from './Formulario2';
import 'index.css';

function refreshPage() {
    window.location.reload(false);
  }

const Formulario = () =>{
    return (
        <div className="ui fluid container">
            <br/>
            <div><p><h1>FORMULARIO PARA TENER REGISTRO DE SU VISITA</h1></p></div>
            <div className="ui segment">
                <div>
                    <Formulario2/>
                </div>
                <br/>
                <div className="new-line">
                    <input type="button" value="Enviar" className="btn" onClick={refreshPage}/>
                </div>
                <Link to='/'>
                    <p class="ui center aligned container volver">Volver al Inicio</p>
                </Link>
                
            </div>

        </div>
    )
}

export default Formulario