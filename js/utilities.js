/**
 * Esta función te permite hacer un reset de los campos selecciónados por el usuario.
 * No se retorna nada. recuerca que algunos valores se hace el reset a 0, otros a 1
 */
export function reset(billInput, customPercentageBtn, peopleInput, tipAmountInput, totalInput) {
    billInput.value = '';
    customPercentageBtn.value = '';
    peopleInput.value = '';
   tipAmountInput.textContent = "0";
    totalInput.textContent = "0"; 
    
    peopleInput.style.borderColor = '';
    document.getElementById('people-error-message').textContent ='';
  
}


/**
 * Esta función te permite calcular el tip(propina) que se recibirá
 * por cada persona.
 * @returns el monto de tip por persona.
 */
export function calcularTip(bill, tip, people) {
  const tipPerPerson = (bill *(tip / 100)) / people;
  return tipPerPerson;
}

/**
 * Calcula el total a pagar por cada persona, incluyendo el tip que
 * le corresponde.
 * @returns el monto total por persona.
 */
export function calcularTotal(bill, tip, people) {
   const totalPerPerson = ( bill + (bill * tip /100)) / people;
   return totalPerPerson;
}



/**
 * Valida si el valor de un campo es 0 o no, si lo es retorna true, si no, retorna false
 */
export function esCero(input) {
   return input === 0;
}


/**
 * Añade la clase "active" al elemento.
 * @param { Node } input - un elemento input de html.
 * puedes investigar sobre : uso de classList en los elementos DOM. añadir, remover.
 */
export function claseActivo(input) {
    input.clasList.add('Active')
}