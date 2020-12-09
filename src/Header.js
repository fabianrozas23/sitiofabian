import React from 'react'
import Validador from './Validador';


function validate() {
    return (
      <div className="App">
        <header className="App-header">
          <p><h2>INGRESE SU RUT</h2></p>
          <p>Este validador es para pobrar si su rut es verificable. Debe ingresar el rut sin puntos y con guión. Luego
            se debe ingresar la contraseña (password) para finalizar con el validador.
          </p>
          <Validador placeholder="00000000-0" />
          <p><h3>Muchas Gracias por su participación!</h3></p>
        </header>
      </div>
    );
  }
  
  export default validate;