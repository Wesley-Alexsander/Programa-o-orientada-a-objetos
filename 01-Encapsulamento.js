/*

    Primeiro vamos criar um codigo estrutural, ela servirá de exemplo pra mostrarmos 
    como alterações podem ser feitas no nosso codigo e como isso pode impactar a pessoa que está recebendo esses dados.

    Depois criaremos um encapsulamento utilizando a programação orientada ao objeto, e assim definiremos as regras 
    de restrição de dados.


*/





    // Codigo Estrutural:

    /* O grande problema neste modo de usar, é que em algum momentos podemos fazer as alterações desses valores
    de variaveis, talvez nós em algum momento do codigo modifiquemos a nossa função, isso pode alterar os dados que o cliente
    vai receber. */

    let altura = 30  // podemos trocar os valores das variaveis 
    let largura = 60

    function calcularArea(){
        return altura * largura // Podemos mudar os calculos feitos pela função.
    }

    let area = calcularArea()
    console.log(area)




    // Codigo Orientado ao objeto + (Encapsulamento):


/*

    1° Primeiro começamos criando uma classe chamada poligono.
    2° Depois criamos a nossa função construtora (constructor) passando os parametros que iremos receber
    3° Em seguida utilizamos o "this" para nos referir ao objeto que sera criado, neste caso a largura e altura.
    4° Então criamos uma função chamada "get area" que vai simplesmente retornar o resultado da função calcular area.
    5° Agora nós criamos a função calcular area e dizemos que ela vai retornar a altura versos a largura.
           5.1 Obs: Note que colocamos uma HashTag na nossa função calcular area, esta hash  significa que este metodo criado
                  Não pode ser usado fora da classe, ou seja, ele só irá existir dentro da nossa classe.
    6º por fim definimos a variael que vai criar um novo objeto e enviar o seus valores para nossa classe Poligono.
    



 */

    class Poligono{ // classe
        
        constructor(altura, largura){ // função construtora
            this.altura = altura
            this.largura = largura
        }

        get area(){
            return this.#calcularArea()
        }


        #calcularArea() { // Hash cria um acesso restrito a este metodo, podendo ser usado apenas dentro da classe.
            return this.altura * this.largura
        }
    }


    let var_poligono = new Poligono(50, 60) // Cria um novo objeto e istancia ele dentro da classe poligono

    console.log(var_poligono.area)