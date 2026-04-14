import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UsaHooks from './componentes/UsaHooks.jsx';
import UsaHookEffect from './componentes/UsaHookEffect.jsx';
import MuestraPokemon from './componentes/MuestraPokemon.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MuestraPokemon />
  </StrictMode>,
)
