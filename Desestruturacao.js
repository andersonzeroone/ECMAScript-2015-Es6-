const usuario = {
    nome:'Goku',
    idade: '34',
    endereco: {
        cidade: 'Rio',
        estado: 'BA'
    }
}

const  {nome, idade, endereco:{cidade}} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);