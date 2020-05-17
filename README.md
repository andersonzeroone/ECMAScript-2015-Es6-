# ES6+


Um pouco sobre as novas funcionalidades do javaScript como:


 *  [webpack](#sobre-webpack)
 *  [Class](#sobre-class)
 *  [Arrow functions](#sobre-Arrow-funtions)
 *  [Desestruturação](#sobre-desestruturação)
 *  Rest/spread
 *  Import/export
 *  Async/await

##### Alguns projetos precisam ser rodados no browser  para ver o um pouco o funcionamento do babel.

#### como rodar os projetos do browser

Para rodar os projetos é preciso:
* Instalar o ![yarn](https://yarnpkg.com/)
* Rodar o "npm i" ou utilizando o yarn para poder instalar as dependências
* Usar o comando "yarn dev"
* Abrir o arquivo index.js no browser
* Abrir a opção de  desenvolvedor (F12) no navegador


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

## Sobre Arrow funtions 

As funcões arrow funtions possuem uma sintaxe mais curta em comparação com as function expression. Elas não possui seu próprio This, arguments, super. Elas não podem ser usadas como construtotas e melhor se aplicam em funcções que não sejam métodos.

### Ex:
```css
dobro = a => 2 * a
console.log(dobro(Math.PI))
```

## Sintaxe
```css
Sintaxe básica
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalente a: => { return expression; }

// Parênteses são opcionais quando só há um nome de parâmetro:
(singleParam) => { statements }
singleParam => { statements }

// A lista de parâmetros para uma função sem parâmetros deve ser escrita com um par de parênteses.
() => { statements }
```

```css
Sintaxe avançada
// Envolva o corpo da função em parênteses para retornar uma expressão literal de objeto:
params => ({foo: bar})

```
### Funções mais curtas


```css
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(function(element) { 
  return element.length; 
}); // esta sentença retorna o array: [8, 6, 7, 9]

// A função regular acima pode ser escrita como a arrow function abaixo
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// Quando só existe um parâmetro, podemos remover os parênteses envolvendo os parâmetros:
elements.map(element => {
  return element.length;
}); // [8, 6, 7, 9]

// Quando a única sentença em uma arrow function é `return`, podemos remover `return` e remover
// as chaves envolvendo a sentença
elements.map(element => element.length); // [8, 6, 7, 9]

// Neste caso, porque só precisamos da propriedade length, podemos usar o parâmetro de destruição (destructing parameter):
// Note que a string `"length"` corresponde a propriedade que queremos obter enquanto que a
// obviamente propriedade não especial `lengthFooBArX` é só o nome de uma variável que pode ser mudado
// para qualquer nome válido de variável que você quiser
elements.map(({ "length": lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

// Esta atribuição de parâmetro de destruição (destructing parameter) pode ser escrita como visto abaixo. Entretanto, note que
// não há um específico `"length"` para selecionar qual propriedade nós queremos obter. Ao invés disso, o nome literal
// da própria variável `length` é usado como a propriedade que queremos recuperar do objeto.
elements.map(({ length }) => length); // [8, 6, 7, 9]
```

## Sobre desestruturação
A desestruturação em JavaScript e uma expressão que permite extrair dados de arrays ou objetos.

## Ex:
```css
var a, b, rest;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({a, b} = {a:1, b:2});
console.log(a); // 1
console.log(b); // 2

// ES2016 - não implementado em Firefox 47a01
({a, b, ...rest} = {a:1, b:2, c:3, d:4});
```

## Desestruturação de array

Atribuição básica de variável

```css
var foo = ["one", "two", "three"];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```

Atribuição separada da declaração

Uma variável pode ter seu valor atribuído via desestruturação separadamente da declaração dela.

```css

var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

```

Analisando um array retornado de uma função

Sempre foi possível retornar uma matriz de uma função. A desestruturação pode tornar mais conciso o trabalho com um valor de retorno do tipo array.

Neste exemplo, f() returna os valores [1, 2] como saída, que podem ser analisados em uma única linha com desestruturação.

```css
function f() {
  return [1, 2];
}

var a, b; 
[a, b] = f(); 
console.log(a); // 1
console.log(b); // 2
```

Ignorando alguns valores retornados
Você pode ignorar valores retornados que você não tem interesse:

```css
function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

```

Você também pode ignorar todos os valores retornados:

```css
[,,] = f();
```

Atribuindo o resto de um array para uma variável
Ao desestruturar um array, você pode atribuir a parte restante deste em uma viáriável usando o padrão rest:

```cc
var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

Extraindo valores do resultado de uma expressão regular
Quando o método de expressão regular exec() encontra um resultado, ele retorna um array que contém primeiro toda a porção resultante da string e depois cada uma das porções da string resultante envolvidas por parênteses na expressão regular. A atribuição via desestruturação lhe permite extrair as partes desses array facilmente, ignorando a porção resultante completa se não precisar.

```cs
var url = "https://developer.mozilla.org/en-US/Web/JavaScript";

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

var [, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol); // "https"

```


## Desestruturação de objeto

Atribuição básica

```css
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true 
```

Atribuição sem declaração
Uma variável pode ter seu valor atribuído via desestruturação separadamente da sua declaração.

```css
var a, b;

({a, b} = {a:1, b:2});
```

```css
Os parênteses ( ... ) ao redor da reclaração de atribuição é uma sintaxe necessária  quando se utiliza a atribuição via desestruturação de objeto literal sem uma declaração.

{a, b} = {a:1, b:2} não é uma sintaxe stand-alone válida, pois {a, b} no lado esquerdo é considarada um bloco, não um objeto literal.

No entanto, ({a, b} = {a:1, b:2}) é valida, assim como var {a, b} = {a:1, b:2}
```

Atribuição para variáveis com novos nomes
Uma variável pode ser extraída de um objeto e atribuída a uma variável com um nome diferente da propriedade do objeto.

```css
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;
 
console.log(foo); // 42 
console.log(bar); // true  
```

Valores padrão

Uma variável pode ser atribuída de um padrão, no caso em que o valor retirado do objeto é undefined.

```css
var {a=10, b=5} = {a: 3};

console.log(a); // 3
console.log(b); // 5
```

Definindo um valor padrão de parâmetro de função

#### Versão ES5

```css
function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? 'big' : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
  // now finally do some chart drawing
}

drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});

```

#### Versão ES2015

```css
function drawES2015Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) {
  console.log(size, cords, radius);
  // do some chart drawing
}

drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});

```

Objeto aninhado e desestruturação de array

```css
var metadata = {
    title: "Scratchpad",
    translations: [
       {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
       }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"

```

For de iteração e desestruturação

```css
var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith"
    },
    age: 35
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones"
    },
    age: 25
  }
];

for (var {name: n, family: { father: f } } of people) {
  console.log("Name: " + n + ", Father: " + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```

Fonte:
* https://webpack.js.org/
* https://medium.com/rocketseat/entendendo-e-dominando-o-webpack-4b2e8b3e02da
* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes
* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao
