//Rest

function soma(a,b, ...params){  
    return params.reduce((total, next) => total + next);     
}

console.log(soma(1,2,3,4,5,6,7,8,9));

//spread

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [ ...arr1, ...arr2];

console.log(arr3);