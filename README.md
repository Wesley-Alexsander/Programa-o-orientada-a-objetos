# POO - Programação Orientada ao Objeto

## **O que é "Programação Orientada a Objeto"?**

Como a maioria das atividades que fazemos no dia a dia, programar também possui muitos modos diferentes de se fazer. Esses modos são chamados de paradigmas de programação, e entre eles, estão a programação orientada a objetos (POO) e a programação estruturada. 


Na programação estruturada, um programa é composto por três tipos básicos de estruturas: 
- Sequências: "são os comandos a serem executados" 
- Condições: "sequências que só devem ser executadas se uma condição for satisfeita (exemplos: if-else, switch e comandos parecidos)" 
- Repetições: "sequências que devem ser executadas repetidamente até uma condição ser satisfeita (exemplos: for, while, do-while etc)" 

 
 

Essas estruturas são usadas para processar a entrada do programa, alterando os dados até que a saída esperada seja gerada. 

<br>

A diferença principal é que na programação estruturada, um programa é tipicamente escrito em uma única rotina (ou função) podendo, é claro, ser quebrado em sub-rotinas. Mas o fluxo do programa continua o mesmo, como se pudéssemos copiar e colar o código das sub-rotinas diretamente nas rotinas que as chamam, de tal forma que, no final, só haja uma grande rotina que execute todo o programa. 

Já a programação orientada a objetos surgiu como uma alternativa a essas características da programação estruturada. O intuito da sua criação foi o de aproximar o manuseio das estruturas de um programa ao manuseio das coisas do mundo real, daí o nome "objeto" como algo genérico, que pode representar qualquer coisa tangível e intangível. Além disso, os acessos às variáveis não possuem muitas restrições na programação estruturada, diferente da orientada a objeto. 

Esse novo paradigma se baseia principalmente em dois conceitos chave, classes e objetos. Todos os outros conceitos, igualmente importantes são construídos em cima desses dois. 

 
 
## **Exemplos:**

```JS


    class Poligono{ // classe poligono 

        constructor(altura, largura){ // função que vai construir nosso objeto 
            this.altura = altura
            this.largura = largura
        }

        get area(){ // metodo retornado 
            return this.#calcularArea()
        }


        #calcularArea() { // usamos a "Hash" para tornar nosso metodo oculto 
            return this.altura * this.largura
        }
    }


    let var_poligono = new Poligono(50, 60) // criamos um novo objeto passando os parametros para a classe 

    console.log(var_poligono.area) //utilizamos o metodo area para retornar o resultado dos calculos feitos pelo metodo oculto "calcularArea"
```

<BR>
<BR>

## **Utilização:**
 
    - É utilizado na maioria dos sistemas atuais. 

    - É utilizado por várias linguagens (exemplos: JavaScript, TypeScript, Java, Python). 

    - É utilizada por analistas de sistemas e não somente por programadores. 

        * Utilizada na fase de levantamento de requisitos de sistema. 

        * Utilizada via gráficos, desenhos e textos. 


<BR>
<BR>

## **Quando usar:**

**Dependendo da linguagem:**
> 1º Quando quiser aplicações com padrões de projeto. 
> 
> 2° Quando quiser organizar o código. 
> 
> 3° Para melhor o entendimento do código, pensando nele como um Objeto. 
>
> 4° Quando precisamos fazer reuso do nosso código. 
> 
> 5° Para separar a complexidade de código, abstrair código e expor maneiras mais simples. 
> 
> 6° Para classificar as rotinas e trechos de código. 

<BR>
<BR>

# Entendendo Classes e Objetos:

## **O que são objetos?**

Objeto é uma instância ou modelo derivado de uma classe. Portanto objeto é a representação de qualquer coisa, real ou abstrata, que irá ser manipulada ou armazenada pelo sistema.

O objeto sempre será uma instância ou um elemento de uma classe. 

Exemplos:

pessoa -> João

pessoa -> Maria

pessoa -> José

```JS

class Pessoa{ 

    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }


}


let usuario01 = new Pessoa('João', 24)
let usuario02 = new Pessoa('Maria', 34)
let usuario03 = new Pessoa('José', 62)

console.log(usuario01) // imprime o objeto 01
console.log(usuario02) // imprime o objeto 02
console.log(usuario03) // imprime o objeto 03
console.log(usuario01.nome, usuario01.idade) // imprime o valor dos atributos do objeto

```
No exemplo acima "pessoa" é a classe enquanto que (João, Maria e José) são instâncias desta classe, portanto são objetos. 

Na orientação a objeto nós trazemos a representação de algo do mundo real para o objeto. 

Exemplos: (Pessoa, Aluno, Produto, Carrinho de compras, etc.) 

Porem alguns objetos na programação não são tão fáceis de identificar, pois são abstratos. 

Exemplos: (autenticação, autorização, etc.) 

<br>
<br>

## **O que são Classes?**

Classe é um conjunto de objetos distintos, porém com as mesmas características e comportamentos. A classe é uma abstração de entidades existentes no mundo real. 

Basicamente uma classe é como se fosse um molde que usamos para a criação de objetos. Através da definição de uma classe, descrevemos que propriedades -- ou atributos -- o objeto terá. 

Exemplos de classe: 

    - Pessoa 

    - Animal 

    - Automóvel 

    - Publicação 

Desta forma, a primeira coisa que se deve fazer em uma análise orientado a objetos e identificar as entidades que se pretende considerar no sistema, e imediatamente transformá-las em classes. 

Podemos pensar nas classes como sendo um molde para a criação de objetos. Os objetos são criados a partir de uma classe e muitos podem ser feitos da mesma classe. 

 

### **Exemplo:**

**Maquina de biscoito**

> Pense em uma máquina onde você coloque todos os ingredientes necessários para fazer um biscoito. 
> 
> A própria máquina faz tudo, desde misturar os ingredientes a criar o formato do biscoito e aquece-lo. 
> 
> E a melhor parte é que podemos utilizar esta mesma máquina para fazer quantos biscoitos forem necessários. 

Essa é a ideia de classe, sendo que ela é a máquina que recebe os ingrediente -> (valores), e cria os biscoitos -> (objetos) que também pode ser chamado de instância. 

<br>

### **O que é instancia?**

Significa que estamos criando um objeto através da classe. Ou seja, instância é um objeto cujo comportamento e estado 
são definidos pela classe. 
<br>

# Classes em JavaScript

O JavaScript usa uma programação chamada de multiparadigma, ou seja, nós podemos usar tanto "programação funcional" quanto "programação orientada a objeto" e muitas outras. 
Isso faz com que a classe em (JavaScript) funcione de forma diferente. 
Quando criamos nosso objeto e definimos as suas funcionalidades, por exemplo em **(JAVA)**, este objeto só vai acessar 
seus próprios **"Atributos/Propriedades"** e **Funcionalidades**. 
Para acessar as propriedades de funcionalidades de outro objeto somente pelo 
uso da herança. 

Ja no **(JavaScript)** existe a herança prototipal. Isso quer dizer que o objeto está conectado a uma cadeia de protótipos. 
Ou seja, um objeto herda automaticamente propriedades de uma classe acima dele, que também herda propriedades e funcionalidades de outras classes acima dela. 
Isso ocorre em cadeia, uma classe sempre herdando de outra acima dela que herda de outra acima dela e assim por diante, tornando possível trazer inúmeras propriedades e funcionalidades para um objeto criado. 

<br>

## Prototype
É o mecanismos pelo qual os objetos em "JS" herdam os recursos uns dos outros.
Os objetos no (JavaScript) são protótipos.


<br>
<br>

# Conceitos 

## Encapsulamento:

Na programação orientada a objeto o encapsulamento se refere ao agrupamento de dados e métodos que operam esses dados, esse agrupamento é feito de forma a restringir o acesso direto a alguns componentes do objeto. 
Basicamente nós ocultamos os valores e as funcionalidades de um objeto de dados estruturados, fazendo com que essas funcionalidades e valores só possam ser acessadas dentro da classe, isso possibilita que modificações no sistema possam ser feitas de maneira mais segura, sem que uma funcionalidade esteja espalhada por diversas partes do sistema. 

Para uma melhor demonstração consulte o arquivo **"01-Encapsulamento.js"** 
<br>
<br>

## Herança:

Na programação a herança como o próprio nome já diz, se refere a maneira com que um objeto herda ou estende funcionalidades de um outro objeto que está acima dele. 
Para exemplificar é como quando um filho recebe características semelhantes ao seu pai, só que neste caso é um objeto recebendo funcionalidades de um objeto maior. 

Para uma melhor demonstração consulte o arquivo **"02-Herança.js"** 
<br>
<br>

## Polimorfismo:
Polimorfismo significa "muitas formas", basicamente é a maneira com que podemos rescrever/alterar um atributo ou método de um objeto. 

Quando herdamos funcionalidades de outro objeto, talvez haja a necessidade de rescrever essas mesmas funcionalidades para que elas se encaixem melhor no novo contexto em que as estamos utilizando. 
A grande sacada é que essa mesma funcionalidade não será alterada de forma global, ela na verdade será alterada de forma local, ou seja, esse mesmo condigo terá diferentes corpos/funções dependendo do contexto/escopo em que ele estiver sendo executado. 

Para uma melhor demonstração consulte o arquivo **"03-Polimorfismo.js"** 
<br>
<br>

## Paginas consultadas

<p><a hrf="https://www.alura.com.br/artigos/o-que-e-encapsulamento">Alura</a></p>

<p><a hrf="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Classes_in_JavaScript">MDN</a></p>

<p><a hrf="https://www.devmedia.com.br/javascript-heranca-e-metodos-estaticos/41199">Devmedia</a></p>

