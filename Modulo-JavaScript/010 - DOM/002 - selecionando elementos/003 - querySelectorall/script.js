"use strict";

const p = document.querySelectorAll("p");

p.forEach((Element, index)=>{
 
  Element.style.padding = "10px"; 
  if(index === 0){
    Element.style.background = "red";
   
}
  if(index === 1){
    Element.style.background = "blue"
    

  };
});