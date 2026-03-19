const express = require("express");
const cors = require("cors");
const mongoose= require("mongoose");
const app = express();
const port = 3000;

const Usuario = require("./models/Usuario.js");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

//MongoDB
mongoose.connect("mongodb://maximiliano:maximiliano1612@ac-eolhicn-shard-00-00.ny0huus.mongodb.net:27017,ac-eolhicn-shard-00-01.ny0huus.mongodb.net:27017,ac-eolhicn-shard-00-02.ny0huus.mongodb.net:27017/?ssl=true&replicaSet=atlas-4jjdwu-shard-0&authSource=admin&appName=Cluster0")
.then(()=>{console.log("mongoDB Ready!")})
.catch(err=>console.log(err));


let registros = [
    {
        id:1,
        nombre:"hugo de jesus",
        email: "Hugo@ucc.mx",
        genero:"masculino",
        plataformas:["Netflix", "Prime"]
    },
        {
        id:2,
        nombre:"Kelly Viridiana",
        email: "KellyV@ucc.mx",
        genero:"Femenino",
        plataformas:["Disney", "HBO"]
    }
];

app.get("/api/usuarios", (req, res)=>{
    res.json(registros);
});
let idActual=2;
app.post("/api/usuarios", async (req, res)=>{
    const nuevo = new Usuario(
        {
            nombre:req.body.nombre,
            email: req.body.email,
            genero: req.body.email
        }
    );
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