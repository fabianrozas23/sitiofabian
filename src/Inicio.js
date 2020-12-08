import React from 'react';
import yo from './imagenes/yo.png';

export const Inicio = (props) => (
    <div className="App">
    <div className="new-line"><img src={yo} centered size= 'medium' className="line-jump"/></div>
    <h1 className="new-line">Bienvenidos a mi sitio web</h1>
    <div className="container">
      <p>Este es mi primer sitio web que he creado, y lo he realizado gracias a las asignaturas de Arquitectura de Software
            y Desarrollo Web.</p>

        <p>Espero que con el tiempo pueda aprendar, crear e implementar de mejor manera
            Semantic UI y todos los componentes y herramientas que ayudan a la creación y mantención
            de un sitio web. Esta asignatura es una de mis favoritas por que puedo crear y practicar
            para aprender cada dia mas.
        </p>

             <p> Gracias por la visita y espero que vuelvas pronto !!!!
            </p>
    </div>
</div>

)