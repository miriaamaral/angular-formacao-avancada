type alphanumeric = string | number;

let dados: alphanumeric;
let dados2: alphanumeric;

dados = 1;
dados = "Miriã";
// dados = true; // => Erro, pois o tipo alphanumeric não aceita booleanos

dados2 = "Olá";
dados2 = 42;
// dados2 = false; // => Erro, pois o tipo alphanumeric não aceita booleanos

// reutilizar o tipo alphanumeric em outras partes do código

// Type aliases são uma forma de criar um nome personalizado para um tipo em TypeScript. 
// Eles permitem que você defina um tipo complexo ou uma união de tipos com um nome mais legível e reutilizável. 
// No exemplo acima, o type alias alphanumeric é criado para representar uma união de tipos string e number. 
// Isso torna o código mais claro e fácil de entender, além de permitir que o tipo seja reutilizado em várias partes do código sem a necessidade de repetir a definição do tipo. 
// Type aliases são especialmente úteis quando você tem tipos complexos ou quando deseja dar um nome mais significativo a um tipo específico em seu código.