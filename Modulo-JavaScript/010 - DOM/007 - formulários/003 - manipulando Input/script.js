"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("change", (event) => {
  event.preventDefault();
  const name = form.name.value;

  const newDivElement = document.createElement("div");
    newDivElement.innerText = name.toUpperCase();

    form.nextElementSibling.remove();
    form.after(newDivElement);
});


// submit, input e change são eventos relacionados a formulários e campos de entrada em HTML.

// submit => evento disparado quando o formulário é enviado (clique no botão de submit ou por pressionar a tecla Enter).
// Podemos usar esse evento para validar os dados do formulário antes de enviá-lo, para evitar que o formulário seja enviado com dados inválidos ou incompletos. Também podemos usar esse evento para enviar os dados do formulário para um servidor usando AJAX, sem recarregar a página.


// input => evento disparado quando o valor de um campo de entrada é alterado. 
// Podemos usar esse evento para validar os dados em tempo real ou para atualizar outros elementos da página com base no valor do campo de entrada.


// change => evento disparado quando o usuário terminar de digitar e clicar fora do campo ou pressionar a tecla Tab para sair do campo. 
// Podemos usar esse evento para validar os dados ou para atualizar outros elementos da página com base no valor do campo de entrada, mas ele não é tão útil para validação em tempo real quanto o evento input.