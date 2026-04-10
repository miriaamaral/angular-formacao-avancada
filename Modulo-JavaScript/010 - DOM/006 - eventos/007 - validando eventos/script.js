"use strict";

const menu = document.querySelector("#menu");

if (menu) {
menu.addEventListener("click", (event) => {
  const { target } = event;
  const body = document.querySelector("body");

  switch (target.getAttribute("class")) {
    case "home":
        body.style.backgroundColor = "lightblue";
        break;

    case "sobre":
        body.style.backgroundColor = "lightgreen";
        break;

    case "contato":
        body.style.backgroundColor = "white";
        break;
  }
});
}

// Foi adicionado um if para validar o evento, ou seja, para verificar se o elemento existe. 
// Assim, caso o elemento não exista, o código não irá gerar um erro.