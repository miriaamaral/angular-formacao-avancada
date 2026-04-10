function soma(num1, num2){
   if(typeof num1 === "number" && typeof num2 === "number"){
    return num1+num2;
}
   return "Você passou dados diferentes!"
    

}

console.log(soma(1,6));