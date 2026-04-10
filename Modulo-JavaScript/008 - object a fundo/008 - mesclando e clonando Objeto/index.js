let Tenis = {
    tamanho: 45,
    estoque: true,
  
  };
  let link = { link:{a: "a", b: {c:"c"}}};

  let clone1 = Tenis;
  console.log(clone1);

  let mesclar1 = Object.assign(Tenis, link)//objetct.assingn mescla os objetos
console.log(mesclar1)

let mesclar2 = {...Tenis, ...link};

console.log(mesclar2)