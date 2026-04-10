/*
slice = Pega os dados dentro de um range sem quebrar o Array

splice = Remove os dados de array dentro de um range

*/

/*let arr = [
{nome: "Bruno Soares", tel: "(81)987909641"},
{nome: "Amigo 1", tel: "(81)987909641"},
{nome: "Amigo 2", tel: "(81)987909641"},
{nome: "Amigo 3", tel: "(81)987909641"},
{nome: "Amigo 4", tel: "(81)987909641"},



];
//const newArray = arr.slice(0, 3) 
console.table(arr);

console.table(arr.splice(4,1));
*/

let num = [1,2,3,4,5,6]

let reduce = function(nums, fn, init){
       nums = num
    if (nums.length === 0){
        return init;
    
    };
    let val = init;
    for(let i = 0; i < nums.length; i++){
        val = fn(val, nums[i]);
    
    
    }
return val;


}
console.log(reduce(nums))
