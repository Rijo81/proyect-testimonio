import React from "react";
import '../css/style-testimonio.css';

function Testimonio(props){
    return(
        <div className='contenedor-testimonio'>
            <img 
            className='imagen-testimonio'
            src={ require(`../img/${props.imagen}.png`) }
            alt='Foto de man'/>

            <div className="contenedor-texto-testimonio">
                <p className='nombre-testimonio'><strong>{ props.name }</strong> en { props.country }</p>
                <p className='cargo-testimonio'>{ props.employee } en <strong>{ props.company }</strong></p>
                <p className='texto-testimonio'>" { props.text } "</p>
            </div>
        </div>
    );
}

export default Testimonio;