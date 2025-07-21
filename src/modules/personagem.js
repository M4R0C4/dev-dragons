export class Personagem {
    nome
    vida
    mana
    #level
    descricao
    constructor(nome,level){
        this.nome = nome
        this.#level = 1

        this.vida = 100
        this.mana = 100
    }
    
    aumentarLevel(){
        this.level += 1
    }

    diminuirLevel(){
        this.level -= 1
    }   
    get level (){
        return this.#level
    }

    set level (novolevel){
        if (novolevel >= 1 && novolevel <= 10){
            this.#level = novolevel
        }
    }
    obterInsignia(){
        if (this.#level >= 5) {
            return `Implacável ${this.constructor.tipo}`
        }

        return `Iniciante ${this.constructor.tipo}`
    }

    static verificarVencedor(personagem1, personagem2){
        if (personagem1.level === personagem2.level){
            return 'Empate'
        }
        if (personagem1.level > personagem2.level){
            return `${personagem1.constructor.tipo} ${personagem1.nome} vence` 
        }
        return `${personagem2.constructor.tipo} ${personagem2.nome} vence`
    }
}

