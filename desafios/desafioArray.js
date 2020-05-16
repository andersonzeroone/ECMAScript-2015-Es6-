//map
const usersData = [
    { name: 'Goku', age: 23, city: 'RIO' },
    { name: 'Kuririn', age: 15, city: 'SSA' },
    { name: 'Gohan', age: 30, city: 'ACRE' },
   ];

const ages = usersData.map( (users) =>{
    return  users.age;
})

console.log(ages);

//filter

const filterCity = usersData.filter( (users)=>{
    return users.city === 'RIO';
})

console.log(filterCity);
