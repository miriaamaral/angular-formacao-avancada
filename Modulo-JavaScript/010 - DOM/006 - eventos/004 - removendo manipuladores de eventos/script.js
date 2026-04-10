"use strict";

const btn = document.querySelector("button");

const acionarAlert = () => {
    let validador = false;

    alert("Deseja acionar o alert?");

    validador = true;

    if(validador) {
        btn.removeEventListener("click", acionarAlert);
    }
};

btn.addEventListener("click", acionarAlert);