import React from "react";
import { useState } from "react";

function UsaHooks(){
   // var nombre="Juan";
    const [nombre, setNombre] = useState("Juan");
    const[flag, setFlag] = useState(false);
    /*const[genero, setGenero] = useState("femenino");

if (genero =="femenino"){
    return(
        <h1>Maximiliana</h1>
    );
} else if (genero =="masculino"){
    return(
        <h1>Maximiliano</h1>
    );
}
}*/

const [contador, setContador] = useState(0);

return(
    <div>
        <h1>{contador}</h1>
        <button onClick={()=>{setContador(contador+1)}}>Incrementar</button>
        <button onClick={()=>{setContador(contador-1)}}>Decrementar</button>
    </div>
);
}

/*return fragmento ? (
    <>

    <div>
    <h1>{nombre}</h1>
    <button onClick={()=>{setNombre("Pedro");
        console.log(nombre)
    }}>
        Click me
    </button>
    <p>{flag?"afirmativo":"negativo"}</p>

    </div>
    </>
)
:
<>
    <h1>nada que mostrar</h1>
</>
}*/

export default UsaHooks;