// IIFE = Immediately Invoked Function Expression   
// EFII = Expressão de função invocada imediatamente
//(function () {})() função execulta sem chamda
(function (num1, num2 ){
    const calc = num1+num2
    console.log(calc);
    
    })(1,2);



    (() => {
  const teste = "teste";
  console.log(teste);
})();