import React from 'react'
import Validador from './Validador';


function validate() {
    return (
      <div className="App">
        <header className="App-header">
          <p>INGRESE SU RUT</p>
          <Validador placeholder="00000000-0" />
        </header>
      </div>
    );
  }
  
  export default validate;