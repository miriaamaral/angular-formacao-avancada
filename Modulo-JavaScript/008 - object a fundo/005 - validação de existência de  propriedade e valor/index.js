const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas:[{ nome: "nike"}, {nome: "Adidas"}],
    secret :12345,
    n: 5,
    link: {a: "a é = a", b:{c: "C é =c"}},
};

/*if(Tenis.hasOwnProperty("cor")){
  console.log("Existe Tenis")



}else{
  console.log("Não Existe Tenis")


}*/
console.log("estoque" in Tenis);
console.log(Tenis.hasOwnProperty("tamanho"));