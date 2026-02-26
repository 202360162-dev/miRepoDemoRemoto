/*
Existen 5 formas de acceder a los elementos de un documento
1. .getElementsById()
2. .getElementByTagName()
3. .getElementByClassName()
4. .querySelector()
5. .querySelectorAll()
*/
// Vinculando el elemento HTML con un objeo en JS
//const obj_tittle = document.getElementById("titulo");
//console.log(obj_tittle.parentElement);

//const contenedor=document.getElementsByClassName("contenedor");
//console.log(contenedor[0].classList);

//const items=document.getElementsByTagName("li");
//console.log(items[0].innerText)

//const titulo = document.querySelectorAll("ul li.items-color2");
//console.log(titulo[0].classList);

//const titulo = document.querySelector("#titulo");
//titulo.innerText="Nuevo titulo desde JS";
//titulo.style.backgroundColor="Black";

//const ul=document.getElementsByTagName("ul");
//console.log(ul[0].innerText);

//const ancla= document.getElementsByTagName("a");
//console.log(ancla[0].getAttribute("ref"));
//ancla[0].setAttribute("href","https://github.org");

//const container = document.getElementsByClassName("contenedor");
//console.log(container);
//console.log(container[0].classList.contains("items-color1"));
//ontainer[0].classList.add("texto-marron");
//container[0].classList.remove("texto-marron");

const listaItems = document.getElementsByTagName("ul");
const item_nuevo = document.createElement("li"); 
item_nuevo.innerText="Elemento 5";
item_nuevo.classList.add("items-color1");
listaItems[0].append(item.nuevo);

