// Traemos las funciones que están en el archivo utilities.js para usarlos aqui
import { reset, calcularTip, calcularTotal, esCero, claseActivo } from './utilities.js';

/*------------- Elementos del DOM a usar --------------------*/

// elemento <input> donde se registral el Bill o monto de la cuenta.
const bill = document.querySelector("#input-bill");

// en la seccion de "Select Tip %" hay 6 opciones para elegir el porcentaje de propina, aqui los seleccionamos a todos.
const percentageButtons = [...document.querySelectorAll(".percentage-button")];

// elemento <input> donde se indica el numero de personas.
const inputPeople = document.querySelector("#input-people");

// Aqui se guarda el porcentaje del TIP
let tip = 0;

// Cada vez que el usuario escriba en el campo bill, ejecutará una tarea (función)
bill.addEventListener("input", runProgram);

// Hay 6 opciones para propinas, así que la tarea debe ejecutarse por cada uno de ellos
// este primer apartado se asegura de que cada uno realice esa tarea.
percentageButtons.forEach( button => {

  tip = parseFloat(button.value);
  
  // Cada vez que el usuario seleccione o escriba una propina, ejecutará una tarea (función)
  if (button.type == "button") {
    
    button.addEventListener("click", runProgram)
  } else {
    button.addEventListener("input", runProgram)
    
  }
});


// Cada vez que el usuario seleccione o escriba una propina, ejecutará una tarea (función)
inputPeople.addEventListener("input", runProgram)


/* Esta función se encarga de ejecutar todo el programa, ten en cuenta que tanto como para acceder
a los valores de los inputs como para reemplazarlos debes llamar al input y luego a su propiedad
value, ya que funcionan como objetos. Por ejemplo:

>>> input.value // accedemos al "value" del elemento input
>>> let valor = input.value // obtenemos el "value" del input y lo guardamos dentro de la variable valor.
*/
function runProgram() {

  
  
  
}