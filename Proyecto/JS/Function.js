
document.getElementById("boton").onclick, function (){
  console.log("Capturamos el evento click");
  document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en Js";
});

document.getElementById("boton").addEventListener('click', function (){
  console.log("Hola mundo desde Event Listener");
  document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en Js";
});

document.getElementById("boton_color").addEventListener('click', function (){
    document.body.stytle.backgroundColor = "FF0000";
});

document.getElementById("boton").addEventListener('click', function (){
    document.body.style.backgroundColor = "blue";
});

document.getElementById("boton").addEventListener('click', function (){
    document.getElementById("demo").style_display = "none";
});

document.getElementsByClassName('párrafo')

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "pink";
}
