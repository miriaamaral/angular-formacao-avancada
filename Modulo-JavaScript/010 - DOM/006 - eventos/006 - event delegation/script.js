"use strict";

const menu = document.querySelector("#menu");

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