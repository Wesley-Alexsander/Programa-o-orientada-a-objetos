//  # Herança   

/*
    1° Elementos Pai  e Filhos.
    2° Objetos podem herdar ou estender caracteristicas base.
    3° Uma copia de atributos e métodos de outras classes.

    Obs:
        - Um objeto pode se estender de outro que também pode se estender de outros.
        - Torna facil a reutilização do codigo.

*/


// EXEMPLOS:

/*------ elemento pai ------*/
class Veiculo {
    rodas = 4;

    mover(direcao){}
    virar(direcoa){}

}

/*------ elemento filho ------*/
class Moto extends Veiculo {
    constructor(){
        super() // Puxa atributos e metodos do Pai
        this.rodas = 2
    }
}
