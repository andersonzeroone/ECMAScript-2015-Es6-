// MAP 
const arr = [1,2,3,4,5,6,7,8,9];

const newArr = arr.map( function (item, index) {
  return item + index;  
  //soma os valos com os indeces
})

console.log(`Metodo MAP ${newArr}`);

// Reduce

const sum = arr.reduce( function(total, next){
  return total + next;
  //pega o valor e soma com o proximo
})

console.log(`Metodo REDUCE ${sum}`);

//Filter

const filter = arr.filter( function(item){
  return item % 2 ===0;
  //retorna true se for par
})

console.log(`Metodo Filter ${filter}`);

//Find

const find = arr.find(function(item){
  return item == 4;

  //retorna o valor se existir no array;
})

console.log(`Metodo Find ${find}`);