import { Personagem } from "./personagem.js";
import { classeArqueiro } from "./classeArqueiro.js";
import { classeMago } from "./classeMago.js";

export class classeArqueiroMago extends Personagem{
    ladoArqueiro
    ladoMago
    static tipo = "ArqueiroMago"
    static descricao = 'Vocês são esmagados pela fúria do Arqueiro-Mago!'

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome)
        this.ladoArqueiro = new classeArqueiro(nome, destreza)
        this.ladoMago = new classeMago(nome, elementoMagico, levelMagico, inteligencia)
    }
    obterInsignia(){
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}