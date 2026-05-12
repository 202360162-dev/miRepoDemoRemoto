# Contador Vue

Un proyecto simple de Vue 3 que implementa un contador con funcionalidad para incrementar, decrementar y reiniciar el valor.

## Características

- ✨ Contador interactivo
- ➕ Botón para incrementar
- ➖ Botón para decrementar
- 🔄 Botón para reiniciar el contador
- 🎨 Interfaz moderna con gradientes y animaciones

## Requisitos

- Node.js (v14 o superior)
- npm o yarn

## Instalación

1. Navega a la carpeta del proyecto:
```bash
cd DEMOVUE
```

2. Instala las dependencias:
```bash
npm install
```

## Uso

Para ejecutar el proyecto en modo desarrollo:
```bash
npm run dev
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:5173`

Para compilar para producción:
```bash
npm run build
```

Para ver la vista previa de producción:
```bash
npm run preview
```

## Estructura del Proyecto

```
DEMOVUE/
├── src/
│   ├── App.vue          # Componente principal con el contador
│   └── main.js          # Archivo de entrada
├── index.html           # HTML principal
├── vite.config.js       # Configuración de Vite
├── package.json         # Dependencias del proyecto
└── .gitignore          # Archivos a ignorar en git
```

## Tecnologías Utilizadas

- **Vue 3** - Framework JavaScript
- **Vite** - Herramienta de compilación
- **JavaScript** - Lógica de la aplicación
- **CSS3** - Estilos y animaciones

## Funcionalidades

- **Incrementar**: Suma 1 al contador
- **Decrementar**: Resta 1 al contador
- **Reiniciar**: Restaura el contador a 0
