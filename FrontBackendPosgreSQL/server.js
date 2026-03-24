const express = require("express");
const cors = require("cors");

const {createClient } = require("@supabase/supabase-js");

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());
app.use(express.static("public"));
require("dotenv").config();
// plataformausuarios
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

if (supabase)
    console.log("Supabase Conetado con exito");



app.get("/api/usuarios", async (req, res)=>{
    const {data, error} = await supabase
    .from('plataformausuarios')
    .select('*');
    if (error) return res.status(500).json(error);
    res.json(data);
});
app.post("/api/usuarios", async (req, res)=>{
    const {data, error} = await supabase
    .from ('plataformausuarios')
    .insert([{
        nombre: req.body.nombre,
        email: req.body.email,
        genero: req.body.genero,
        plataformas: req.body.plataformas
    
    }])
    .select();
    if (error) return res.status(500).json(error);
    res.json(data[0]);

});

app.put("/api/usuarios/:id", (res, req)=>{
    const id=parseInt(req.params.id);
    const usuario = registros.find(u => u.id==id);
    if(!usuarios){
        return res.statusCode(404).json({mensaje:"No encontrado"})
    }
    usuario.nombre=req.body.nombre;
    usuario.email=req.body.email;
    usuario.genero=req.body.genero;
    usuario.plataformas=req.body.plataformas;

    res.json(usuario);

});

app.listen(port, ()=>{
    console.log("listening at http://localhost:"+port)
});