import React from "react";
import'../estilos/Card.css';
import planta1 from '../imagenes/planta1.jpg';
import planta2 from '../imagenes/planta2.jpeg';
import planta3 from '../imagenes/planta3.jpg';

const imagenes = {
    planta1: planta1,
    planta2: planta2,
    planta3: planta3
};



function Card(props){
    return(
        <div className="contenido-card">
            <img
            className="imagen-card"
            src={imagenes[props.imagen]}
            alt='foto de ${props.titulo}' />
            <div className="contenedor-texto-card">
                <p className="titulo-card">
                    <strong>{props.titulo}</strong>
                </p>
                <p className="pais-card">
                    {props.pais}
                </p>

                <p className="texto-card">
                    {props.contenido}
                </p>
            </div>
        </div>
    );
}

export default Card;