ES6+

Um pouco sobre as novas funcionalidades do javaScript como:


   [webpack](#sobre-webpack)
   [Class}(#sobre-class)
    Arrow functions
    Desestruturação
    Rest/spread
    Import/export
    Async/await

## Sobre webpack  

O webpack é usado para empacotar modulos estáticos, gerando um mapeamento dos modulos e dependencias podendo gerar um ou mais pacotes. Em resumo, um projeto que existem diversos arquivos .js, .css é possível unir esses modulos, ou em projetos maiores divide esses modulos e no final passam a ser um só.

entendo o que acontece ...

![img](https://www.webdevdrops.com/wp-content/uploads/2019/10/webpack-1.png)


O webpack posso a seguinte estrutura básica.

#Entrey

Indica qual módulo o webpack deve usar para iniciar em seguida busca as dependêmcias  e faz a importação. Normalmente o ponto de entrada  é definido no ./src/main.js, mas é possível definir um arquivo diferente e até emsmo vários pontos de entradas fazendo sua configuração no webpack.config.js.

```css
module.exports = {
	entry: './src/main.js',
	
```
# Output

Output define o nome e local  onde será  gerado  o pacote pelo webpack.  Para configurar, devemos definir um objeto output com as propriedades path  e filename no arquivo de configuração do webpack:
```css
module.exports = {
	entry: './src/main.js',
	output:{
		path: __dirname + '/public',
		filename: 'bundle.js',
	},

```

Essa congiguração irá um arquivo bundle.js , A propriedade  path   indica onde o arquivo será criado , o __dirname  variável do nodejs contém o nome do diret?io onse se encontra o módulo atual.
e filename  o nome do arquivo que será gerado.

# Loaders

O Loaders é usadado para que ele possa entender outros tipos de arquivos  Loaders que são módulos que podem ser instalados separadamente possibilitando que o webpack converta esses arquivos em módulos válidos e os adicione ao gráfico de dependência. Os Loaders também são utilizados para converter JavaScript de uma versão para outra. Para incluirmos os Loaders criamos uma nova seção module no arquivo de configuração, nessa seção podemos definir uma ou mais rules

```css
module:{
   rules:[
	{    test:/\.js$/,
	   exclude: /node_modules/,
		use:{
		loader: 'babel-loader',
		       }	
		   }
	       ],
       },
}


```

# Estrutura webpack

```css
module.exports = {
	entry: './src/main.js',
	output:{
		path: __dirname + '/public',
		filename: 'bundle.js',
	},
	devServer:{
		contentBase: __dirname + '/public'
	},
	module:{
		rules:[
		{    test:/\.js$/,
			exclude: /node_modules/,
			use:{
				loader: 'babel-loader',
			   }	
		   }
	       ],
       },
}

```












## Sobre Class

As classes foram introduzidas no ECMAScript 2015, uma herança baseada em protótipos.As casses em JavaScript permite a criação simples e clara de objetos e lidar com herança.

Definindo classes
Uma maneira de definir uma classe é usando uma declaração de classe. Para declarar uma classe, você deve usar a palavra-chave class seguida pelo nome da classe (aqui "avo").

```css
class avo {
      constructor(sobrenome){
       this.sobrenome = sobrenome
       }
}
```
## Expressões de Classes

Expressões de Classes podem possuir nomes ou não (anônimas). O nome dado para uma expressão de classe é local ao corpo da classe.

```css
// sem nome
let avo = class{
      constructor(sobrenome){
       this.sobrenome = sobrenome
       }
}

//nomeada
let avo = class avo {
      constructor(sobrenome){
       this.sobrenome = sobrenome
       }
}
```
Estrutura de uma classe

A classe possui em sua estrutura metodos e um construtor, o corpo da chave e envolvido por {}.

## Construtor 

O método constructor é um tipo especial de método para criar e iniciar um objeto criado pela classe. Só pode existir um método especial com o nome "constructor" dentro da classe. Um erro de sintáxe SyntaxError será lançado se a classe possui mais do que uma ocorrência do método constructor.
Um construtor pode usar a palavra-chave super para chamar o construtor de uma classe pai.








## Métodos estáticos

A palavra-chave static define um método estático de uma classe. Métodos estáticos são chamados sem a instanciação da sua classe e não podem ser chamados quando a classe é instanciada. Métodos estáticos são geralmente usados para criar funções de utilidades por uma aplicação.


```css
class Ponto {
	constructor(x, y) {
	   this.x = x;
	   this.y = y;
     }

	static distancia(a, b) {
	    const dx = a.x - b.x;
	    const dy = a.y - b.y;

	   return Math.hypot(dx, dy);
     }
}


const p1 = new Ponto(5, 5);
const p2 = new Ponto(10, 10);

p1.distancia;//undefined
p2.distancia;//undefined

console.log(Ponto.distancia(p1, p2));
```
## Empacotando com protótipos e métodos estáticos

Quando um método estático ou protótipo é chamado sem um objeto "this" configurado (ou com "this" como boolean, string, number, undefined ou null), então o valor "this" será undefined dentro da função chamada. Autoboxing não vai acontecer. O comportamento será o mesmo mesmo se escrevemos o código no modo não-estrito.
```
```css
class Animal { 
        falar() {
            return this;
          }
          static comer() {
            return this;
          }
}

let obj = new Animal();
obj.falar(); // Animal {}
let falar = obj.falar;
falar(); // undefined

Animal.comer(); // class Animal
let comer = Animal.comer;
comer(); // undefined
```

Se escrevemos o código acima usando classes baseadas em função tradicional, então o autoboxing acontecerá com base no valor de "this" para o qual a função foi chamada.


```css
function Animal() { }

    Animal.prototype.falar = function() {
         return this;
    }

    Animal.comer = function() {
        return this;
    }

let obj = new Animal();
let falar = obj.falar;
falar(); // objeto global

let comer = Animal.comer;
comer(); // objeto global

```
## Propriedades de instância

Propriedades de instâncias devem ser definidas dentro dos métodos da classe:
```css
class Retangulo {
   constructor(altura, largura) {    
     this.altura = altura;
     this.largura = largura;
  }
}
```
Propriedades de dados estáticos e propriedades de dados prototipados (prototype) devem ser definidos fora da declaração do corpo da classe.

Retangulo.larguraEstatico = 20;
Retangulo.prototype.larguraPrototipagem = 25;
Sub classes com o extends

A palavra-chave extends é usada em uma declaração de classe, ou em uma expressão de classe para criar uma classe como filha de uma outra classe.

```css
class Animal { 
  constructor(nome) {
    this.nome = nome;
  }
  
  falar() {
    console.log(this.nome + ' emite um barulho.');
  }
}

class Cachorro extends Animal {
  falar() {
    console.log(this.nome + ' latidos.');
  }
}

let cachorro = new Cachorro('Mat');
cachorro.falar();

```
Se existir um contrutor nas subclasses, é necessário primeiro chamar super() antes de usar a keyword "this".

Também é possivel ampliar (extends) "classes" baseadas em funções tradicionais.

```css
function Animal (nome) {
  this.nome = nome;
}

Animal.prototype.falar = function() {
   console.log(this.nome + ' faça barulho.');
}

class Cachorro extends Animal { 
  falar() {
    console.log(this.nome + ' lati.');
  }
}

let cachorro = new Cachorro('Mitzie');
cachorro.falar(); // Mitzie lati.

Note que classes não extendem objetos normais (não construíveis). Se você quer herdar de um objeto, é necessário utilizar Object.setPrototypeOf():

let Animal = {
   falar() {
      console.log(this.nome + ' faça barulho.');
   }
};

class Cachorro {
   constructor(nome) {
      this.nome = nome;
   }
}

Object.setPrototypeOf(Cachorro.prototype, Animal); 

let cachorro = new Cachorro('Mitzie');
cachorro.falar(); //Mitzie faça barulho.
```

## Species

Você pode querer retornar um objeto Array na sua classe MinhaArray derivada de array. O padrão Species permite a sobrescrita do construtor padrão.

Por exemplo, quando utilizando um método como map() que retorna o construtor padrão, você pode querer que esse método retorne um objeto Array ao invés do objeto MinhaArray. O Symbol.species te permite fazer isso:

class MinhaArray extends Array {
   // Sobrescreve species para o construtor da classe pai Array
   static get [Symbol.species]() { return Array; }
}

let a = new MinhaArray(1,2,3);
let mapped = a.map(x => x * x);
 
console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true

## Chamada da classe pai com super

A palavra-chave (keyword) super é utilizada para chamar funções que pertencem ao pai do objeto.

```css
class Gato {
   constructor(nome) {
      this.nome = nome;
   }

   falar() {
      console.log(this.nome + ' faça barulho.');
   }
}

class Leao extends Gato {
   falar() {
      super.falar();
      console.log(this.nome + ' roars.');
   }
}

let leao = new Leao('Fuzzy');
leao.falar();

// Fuzzy faça barulho.
// Fuzzy roars.
```

## Ex de class  do projeto
```css
class avo {
      constructor(sobrenome){
       this.sobrenome = sobrenome
       }
}

class pai extends avo{
       constructor(sobrenome, profissao = 'dev'){
       super(sobrenome)
       this.profissao = profissao
       }
}

class filho extends pai {
       constructor(){
       super('Silva')
       }
}

const Filho = new filho
console.log(Filho);

```

Fonte:
https://webpack.js.org/
https://medium.com/rocketseat/entendendo-e-dominando-o-webpack-4b2e8b3e02da
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes
