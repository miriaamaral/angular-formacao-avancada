const Tenis = {
   tamanho: 45,
   estoque: true,
   marcas:[{ nome: "nike"}, {nome: "Adidas"}],
   secret :12345,
   n: 5,

};
const {secret: randoNumber, n: avaliacoes } = Tenis;
//const {tamanho, estoque, marcas} = Tenis;

console.log(randoNumber);
console.log(avaliacoes);
console.log(Tenis.marcas)


