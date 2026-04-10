"use strict"

const h1 = document.querySelector("h1");
h1.classList.add("active");//classlist.add adciona uma class mas também pode adcionar outros elementos
h1.classList.toggle("teste2")// vê se existe a classe se não existir ele cria
if(h1.classList.contains("active")){ //.contains verificar se a classe active
  //alert("Existe a classe active");
}

console.log(h1)