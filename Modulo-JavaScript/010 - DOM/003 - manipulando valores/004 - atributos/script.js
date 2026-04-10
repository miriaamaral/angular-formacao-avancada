"user strict";

const div = document.querySelector("div");

div.setAttribute("id", "teste") //Atribuiu o id teste a div.
div.setAttribute("class", `${div.getAttribute("class")} active`);
div.setAttribute("class", `${div.getAttribute("class")} background`)

div.removeAttribute("class")
console.log(div)