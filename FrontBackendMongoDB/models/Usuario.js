const mongoose = require ("mongoose");
const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    genero: {
        type: String,
        required: true
    },
    plataformas:{ type: [String], required: false}
});

module.exports = mongoose.model('Usuario', UsuarioSchema);