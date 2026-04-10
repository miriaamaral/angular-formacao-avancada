"use strict";

const form = document.forms.namedItem("select-checkbox");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");

let checkedValues = []

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const checkbox = form.checkbox;

    submit.innerHTML = checkedValues;
});

form.checkbox.forEach((element) => {
  element.addEventListener("change", (event) => {
    const value = event.target.value;
  })
})

const hasChecked = (event, element) => {
    const { target } = event;
    if (target.checked) {
      return checkedValues.push(element.value);
    }

    if (!target.checked) {
      const index = checkedValues.indexOf(element.value);
      return checkedValues.map((checkedValue, index) => {
        if (element.value === checkedValue) {    
            return checkedValues.splice(index, 1);
        }
    });
}}

// trabalhar com checkbox é mais dificl 
// porque precisa trabalhar com o forEach, fazer algumas verificações, 
// mas é possível criar uma função para facilitar a manipulação do checkbox, 
// como a função hasChecked, que recebe o evento e o elemento, 
// e verifica se o checkbox está marcado ou desmarcado, 
// e adiciona ou remove o valor do checkbox do array checkedValues.