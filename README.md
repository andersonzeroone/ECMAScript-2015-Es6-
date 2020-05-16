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

As classes foram introduzidas no ECMAScript 2015, uma herança baseada em protótipos. As casses em JavaScript permite a criação simples e clara de objetos e lidar com herança.


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
