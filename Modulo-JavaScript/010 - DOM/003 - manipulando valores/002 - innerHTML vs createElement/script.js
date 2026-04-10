"use strict";
/**
 * innerHtml => Retorna o texto, com formatações e com elementos HTML
 * creatElement => Cria um elemento HTML
 */

const div = document.querySelector("div")
//console.log(div);

//div.innerHTML += "<strong>Esse é meu //texto alterado!</strong>"

const elementUl = document.createElement("ul"); //Criamos uma elemento ul 
div.appendChild(elementUl); // e adicionamos ele dentro da div

[1,2,3].forEach((Element)=>{
   const elementLi =document.createElement("li")
   elementUl.appendChild(elementLi);
   elementLi.innerHTML = Element


})



console.log(elementUl)