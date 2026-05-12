<template>
  <div class="container">
    <div class="form-container">
      <h1>Formulario de Contacto</h1>
      
      <div class="form-section">
        <form @submit.prevent="enviarFormulario">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input 
              id="nombre"
              v-model="nombre" 
              type="text" 
              placeholder="Ingresa tu nombre"
              required
            >
          </div>

          <div class="form-group">
            <label for="email">Correo Electrónico:</label>
            <input 
              id="email"
              v-model="email" 
              type="email" 
              placeholder="Ingresa tu correo"
              required
            >
          </div>

          <button type="submit" class="btn btn-enviar">
            <span class="symbol">✓</span> Enviar
          </button>
        </form>
      </div>

      <div v-if="datosCapturados.mostrar" class="datos-section">
        <h2>Datos Capturados</h2>
        <div class="datos-display">
          <div class="dato">
            <label>Nombre:</label>
            <p class="valor">{{ datosCapturados.nombre }}</p>
          </div>
          <div class="dato">
            <label>Correo Electrónico:</label>
            <p class="valor">{{ datosCapturados.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'FormularioContacto',
  setup() {
    const nombre = ref('')
    const email = ref('')
    const datosCapturados = reactive({
      mostrar: false,
      nombre: '',
      email: ''
    })

    const enviarFormulario = () => {
      if (nombre.value && email.value) {
        datosCapturados.nombre = nombre.value
        datosCapturados.email = email.value
        datosCapturados.mostrar = true
      }
    }

    return {
      nombre,
      email,
      datosCapturados,
      enviarFormulario
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(-45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000);
  background-size: 400% 400%;
  animation: arcoirisBackground 8s ease infinite;
  position: relative;
  overflow: hidden;
}

.form-container {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 100%;
  animation: slideIn 0.5s ease-out;
  position: relative;
  z-index: 10;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1 {
  color: #333;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}

h2 {
  color: #667eea;
  margin: 20px 0;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
}

.form-section {
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

label {
  color: #333;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 1rem;
}

input {
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
}

input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

input::placeholder {
  color: #999;
}

.btn-enviar {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.btn-enviar:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.6);
}

.btn-enviar:active {
  transform: translateY(-1px);
}

.symbol {
  font-size: 1.2rem;
  font-weight: 800;
}

.datos-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 15px;
  padding: 30px;
  border-left: 5px solid #667eea;
  animation: slideInUp 0.5s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.datos-display {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.dato {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.dato label {
  color: #667eea;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.valor {
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
  margin: 0;
  word-break: break-all;
}

@media (max-width: 600px) {
  .form-container {
    padding: 25px;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  input {
    padding: 10px 12px;
    font-size: 16px;
  }

  .btn-enviar,
  .btn-brainroot {
    padding: 12px;
    font-size: 0.9rem;
  }

  .nombre-flotante {
    font-size: 1.2rem;
  }
}
</style>
