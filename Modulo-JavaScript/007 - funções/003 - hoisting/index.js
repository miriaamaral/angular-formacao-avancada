/*

Em JavaScript, hoisting é o processo de mover declarações de variáveis e funções para o topo do escopo em que são usadas. Isso significa que uma variável ou função pode ser usada antes de sua declaração, desde que esteja no mesmo escopo.
*/




function foo() {
    return console.log(bar);
      
  }
  
  var bar = "Hello, world!";
  console.log(foo())