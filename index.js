
class heroiAventureiro {
    ataque = " "

    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }
    
    atacar() {

    
        if (this.tipo === "mago") {
            this.ataque = "magia"

        } else if (this.tipo === "guerreiro") {
            this.ataque = "espada"

        } else if (this.tipo === "monge") {
            this.ataque = "artes marciais"

        } else if (this.tipo === "ninja") {
            this.ataque = "shuriken"

        }
            
        console.log (`O ${this.tipo} atacou usando ${this.ataque}`)
        

    }



}

do {
    let nome = "Heroina";
    let idade = 28;
    let tipo = "mago";

    let heroi = new heroiAventureiro(nome, idade, tipo);
    heroi.atacar(); 


break;

} while(true);



