"use strict"

const h1 =document.querySelector("h1");
h1.style.fontFamily = 'Arial';

const p = document.querySelectorAll("p");

p.forEach((element) => {
    element.style.fontFamily = 'Arial';
    element.style.fontSize = "12px";
    element.style.color = "red" 
    
});