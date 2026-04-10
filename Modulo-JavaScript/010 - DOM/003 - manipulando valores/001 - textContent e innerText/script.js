"use strict";

/**
 * textContent => Retorna o text Com formatações, mas sem os elementos Html
 * innerText => Retorna somente o texto, sem formatações ou elementos
 */

const p = document.querySelector("p");



p.textContent = "Bruno Soares";
p.style.background = 'red';
p.style.padding = "10px"