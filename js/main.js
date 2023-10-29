// Traemos las funciones que están en el archivo utilities.js para usarlos aqui
import { reset, calcularTip, esCero, claseActivo,calcularTotal } from './utilities.js';

/*------------- Elementos del DOM a usar --------------------*/

// elemento <input> donde se registral el Bill o monto de la cuenta.
const billInput = document.querySelector("#input-bill");

// en la seccion de "Select Tip %" hay 6 opciones para elegir el porcentaje de propina, aqui los seleccionamos a todos.
const percentageButtons = [...document.querySelectorAll(".percentage-button")];
const customPercentageBtn = document.querySelector("#custom-percentage-button");

// elemento <input> donde se indica el numero de personas.
const peopleInput = document.querySelector("#input-people");

// En estos campos se muestra los totales
const tipAmountInput = document.querySelector("#tip-amount");
const totalInput = document.querySelector("#total");

// Este es el boton de reset
const resetBtn = document.querySelector("#reset-button");

// Aqui se guarda el porcentaje del TIP, bill y people
let tip = 0;
let bill = 0;
let people = 0;


/*--------------------------- FUNCIONES PARA LOS EVENTOS ----------------------------*/

// Cada vez que el usuario escriba en el campo bill, ejecutará una tarea (función)
billInput.addEventListener("input", runProgram);

// Hay 6 opciones para propinas, así que la tarea debe ejecutarse por cada uno de ellos
// este primer apartado se asegura de que cada uno realice esa tarea.
percentageButtons.forEach( button => {

  
  // Cada vez que el usuario seleccione o escriba una propina, ejecutará una tarea (función)
  if (button.type == "button") {
    
    button.addEventListener("click", () => runProgram(button))
  } else {
    button.addEventListener("input", () => runProgram(button))
    
  }
});


// Cada vez que el usuario seleccione o escriba una propina, ejecutará una tarea (función)
peopleInput.addEventListener("input", runProgram)



/* Esta función se encarga de ejecutar todo el programa, ten en cuenta que tanto como para acceder
a los valores de los inputs como para reemplazarlos debes llamar al input y luego a su propiedad
value, ya que funcionan como objetos. Por ejemplo:

>>> input.value // accedemos al "value" del elemento input
>>> let valor = input.value // obtenemos el "value" del input y lo guardamos dentro de la variable valor.


para los casos de "tipAmount" y "total" se debe seguir el mismo procedimiento
pero con la propiedad "textContent":

>>> tipAmount.textContent

*/
/*----------------------------------------- EDITAR A PARTIR DE AQUI ----------------------------------------------------------*/
function runProgram(button) {
  // Aqui capturamos los valores del usuario, y si alguno está vacio, lo dejamos en cero por defecto, para evitar errores en nuestro programa
  tip = parseFloat(button.value) || tip; // No Borrar
  bill = parseFloat(billInput.value) || 0; // No Borrar
  people = parseFloat(peopleInput.value) || 0; // No Borrar

  /* ESCRIBE TU CÓDIGO AQUI ABAJO */

  if(button?.type === "button"){
    customPercentageBtn.value = "";
  }

  // Verificar si peopleInput es cero o negativo
  if (esCero(people)) {
    // Resaltar en rojo cuando no hay un valor
    peopleInput.style.borderColor = 'red';
    document.getElementById('people-error-message').textContent = "Can't be zero";
    document.getElementById('people-error-message').style.color = 'red';
    return;
  } else {
    // Resaltar en verde cuando se agrega un valor
    peopleInput.style.borderColor = 'green'; // Puedes cambiar a tu color deseado
    document.getElementById('people-error-message').textContent = '';
  }

  if(customPercentageBtn.value !== ""){
    tip = parseFloat(customPercentageBtn.value) || 0
  }
    
  
  percentageButtons.forEach(btn => btn.classList.remove("selected"));
  
  if (button?.classList) {
    button.classList.add("selected");
  }
  
  // Calcular tip y total
  const tipAmount = calcularTip(bill, tip, people);
  const total = calcularTotal(bill, tip, people);
  // mostrar los resultados en pantalla
  tipAmountInput.textContent = `${tipAmount.toFixed(2)}`; 
  totalInput.textContent = `${total.toFixed(2)}`;

  resetBtn.disabled = tipAmount === 0 && total === 0;

  if (resetBtn.disabled) {
    resetBtn.style.backgroundColor = '#ccc';
    resetBtn.style.color = '#888';
    resetBtn.style.cursor = 'not-allowed';
  } else {
    resetBtn.style.backgroundColor = '';
    resetBtn.style.color = '';
    resetBtn.style.cursor = 'pointer';
  }
  // button.classList.toggle('active')
}


// BOTON DE RESET
// Aqui se ejecuta el botón reset, si bien es cierto ya está por funcionar, mira la funcion
// reset, aun no está recibiendo los parametros!! dale los parametros adecuados que debe reiniciar
// para que trabaje de manera adecuada. por ejemplo, los inputs
resetBtn.addEventListener("click", () => { 
  reset (billInput,customPercentageBtn, peopleInput, tipAmountInput, totalInput);
  percentageButtons.forEach(btn => btn.classList.remove('selected'));
     // Deshabilitar el botón de reset después de hacer clic
  resetBtn.disabled = true;

  // Cambiar el estilo del botón de reset cuando está deshabilitado
  resetBtn.style.backgroundColor = '#ccc';
  resetBtn.style.color = '#888';
  resetBtn.style.cursor = 'not-allowed';
 })
