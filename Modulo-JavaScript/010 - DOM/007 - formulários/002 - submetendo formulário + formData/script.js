"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.name.value;
  const password = form.password.value;

  const formData = new FormData(form);

  formData.set("name", "name");
  formData.set("password", "password");
  
  console.log(formData.has("name"));
  console.log(formData.has("password"));

  console.log(formData.get("name"));
  console.log(formData.get("password"));

  // DELETE
    formData.delete("name");
    formData.delete("password");

    console.log(formData.has("name"));
    console.log(formData.has("password"));
});

// usa-se muito o formData para enviar os dados do formulário para o backend.
// has - verifica se o campo existe
// get - pega o valor do campo (se o valor existe ele retorna o que está no campo, caso contrário retorna null)
// set - seta o valor do campo (se o campo não existir, ele é criado, caso contrário, ele é atualizado)
// delete - deleta o campo

// para pegar o valor do campo, basta usar o name do campo (name="name" e name="password") 
// e acessar o valor com form.name.value e form.password.value