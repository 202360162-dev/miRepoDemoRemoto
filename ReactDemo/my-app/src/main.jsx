import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './componentes/Card.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card 
    imagen="planta2"
    titulo="echerveria"
    pais="México"
    contenido="Esta es una planta hermosa que se encuentra en México. Es conocida por su resistencia y belleza, y es una excelente opción para decorar tu hogar o jardín."    
    />
    <Card
    imagen="planta3"
    titulo="suculenta"
    pais="México"
    contenido="Las suculentas son plantas que almacenan agua en sus hojas, tallos o raíces. Son ideales para personas que no tienen mucho tiempo para cuidar de las plantas, ya que requieren poco riego y mantenimiento."    
    />
    <Card
    imagen="planta1"
    titulo="Trueno de Venus"
    pais="México"
    contenido="Los cactus son plantas suculentas que se adaptan a climas áridos y desérticos. Son fáciles de cuidar y requieren poca agua, lo que los hace ideales para principiantes."    
    />

  </StrictMode>,
)
