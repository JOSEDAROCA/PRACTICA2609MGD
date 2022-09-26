/*
// VERSION CON INGRESO DE DATOS POR PROMPT
let nombre = prompt("Cual es tu nombre?");
let edad = prompt("Cual es tu edad?");

const fechaActual = new Date();
const year = fechaActual.getFullYear() - Number(edad);

document.getElementById("resultado").innerHTML = `<h2>Bienvenido ${nombre} de ${edad} años.<h2/><h3>Naciste el año ${year}.</h3>`;
*/

// VERSION DE INGRSO DE DATOS POR INPUT
//CAPTURO TODS LOS INPUTS DEL HTML Y EL CLICK DEL BOTON
let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");
const mayor  = document.getElementById("mayor");
const joven  = document.getElementById("joven");

//ESCUCHO EL BOTON Y ALMACENO LOS DATS CAPTURADOS DEL INPUT PARA SER USADOS
btn.addEventListener("click", () => {
  let nombreIngresado: string = String(nombre.value);
  let edadIngresada: number = Number(edad.value);

//IMPRIMO POR CONSOLA
console.log(nombreIngresado + " " + edadIngresada);

//IMPRIMO POR PANTALLA EN LOS PARRAFOS RESULTADO QUE GENERE EN EL HTML EL NOMBRE Y LA EDAD

resultado.innerText ="El nombre Ingresado es " + nombre.value + " y la edad ingresada es " + edad.value + "";

//IMPRIMO EN EL PARRAFO MAYOR QUE GENERE EN EL HTML SI ES MAYOR O MENOR Y LOS ANIOS QUE TIENE
  if (edadIngresada > 20) {
    mayor.innerText =" Es mayor de edad tiene " + edad.value +" " +  "años";

} else{
  mayor.innerText =" Es menor de edad tiene " + edad.value +" " +  "años";
};

};