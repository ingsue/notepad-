document.getElementById("boton").onclick, function (){
  console.log("Capturamos el evento click");
  document.getElementById("demo").innerHTML = ;
});

document.getElementById("boton").addEventListener('click', function (){
  console.log("Hola mundo desde Event Listener");
  document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en Js";
});