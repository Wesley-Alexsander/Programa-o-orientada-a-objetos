// # Polimorfismo

/*
    Polimorfismo Significa "Muitas formas".

    Quando um objeto se estende de outro (Herança), talvez haja a necessidade de reescrever 
    uma ou mais caracteristicas(Atributos e métodos) neste novo objeto.

    Então criaremos um metodo (ou mais) da classe herdada.

    
*/

// Exemplo:



class Atleta{
    peso;
    categoria;

    constructor(peso){
        this.peso = peso
    }

    definirCategoria(){
        if (this.peso <= 50) {
            this.categoria = "Infantil"
        } else if (this.peso <= 65) {
            this.categoria = "Juvenil"
        } else{
            this.categoria = "Adulto"
        }
    }
}

// Polimorfismo

/*
    O lutador também é um atleta e por isso a classe lutador se estende da classe atleta

*/
class Lutador extends Atleta {
    constructor(peso){
        super(peso)
    }
    
    // rescrevemos  a função de definição de categoria porque para o lutador os pesos e as categorias são diferentes
    definirCategoria(){
        if (this.peso <= 54) {
            this.categoria = "Pluma"
        } else if (this.peso <= 60) {
            this.categoria = "Leve"
        } else if (this.peso <= 75) {
            this.categoria = "Meio-Leve"
        } else {
            this.categoria = "Pesado"
        }
    }
}


/*
    O conceito é bem simples, nós temos uma classe.
    Criamos então uma subclasse, ou seja uma classe que vai herdar algo da outra.
    Só que depois de herdar, nós reescrevemos algumas funcionalidades dentro da nossa subclasse.
 */