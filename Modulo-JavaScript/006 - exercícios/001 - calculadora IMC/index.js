/**
 Como calcular IMC?
 O IMC é calculado dividindo o peso (em kg) pela
 altura ao quadrado (em M), de acordo com a seguinte
 fórmula: IMC = peso / (altura  x altura)
 E nosso calculo devemos retorna os seguintes valores para o usuário:

 Resultado do calc  | Resultado para o usuário
 Abaixo de 17       | Muito abaixo do peso
 Entre 17 e 18.49   | Abaixo do peso
 Entre 25 e 29.99   | Peso normal  
 Entre 18.5 e 24.99 | Acima do peso
 Entre 25 e 29.99   | Obesidade I
 Entre 35 e 39.99   | Obesidade II
 */

 const peso = Number(60);
 const altura = Number(1.7);
 let imc =Number(peso / (altura * altura)).toFixed(2);

 console.log(`Seu IMC é de ${imc}`);

 if( imc < 17){
    console.log("Muito abaixo do peso");
} else if(imc >= 17 && imc <= 18.49){
    console.log("abaixo do peso");

} else if(imc >= 18.5 && imc <=24.99){
    console.log("Peso Normal");

} else if(imc >= 25 && imc <=29.99){
    console.log("Acima do Peso");

} else if(imc >= 30 && imc <=34.99){
    console.log("Obesidade I");

} else if(imc >= 35 && imc <=39.99){
    console.log("Obesidade II")
}  

switch (true) {
    case imc < 17:
        console.log("Muito abaixo do peso")
        break;
    case imc >= 17 && imc <=18.49:
        console.log("Abaixo do peso")
        break;
    case imc >= 18.5 && imc <=24.99:
        console.log("Peso Normal")
        break;
    case imc >= 25 && imc <=29.99:
        console.log("Acima do peso")
    case imc >= 30 && imc <=34.99:
        console.log("Obesidade I")
        break;
    case imc >= 35 && imc <=39.99:
        console.log("Obesidade II")
        break;        
           
    default:
        break;
 }

     

