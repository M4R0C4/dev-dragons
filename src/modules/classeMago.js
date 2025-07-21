import { Personagem } from "./personagem.js";
export class classeMago extends Personagem {
    elementoMagico
    levelMagico
    inteligencia
    static tipo = 'Mago'
    static descricao = 'Vocês serão esmagados pela fúria do Mago!'
    constructor(nome, elementoMagico, levelMagico, inteligencia) {
        super(nome)
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }
    obterInsignia() {
        if (this.level >= 5 && this.inteligencia >= 5) {
            return `Mestre do ${this.elementoMagico}`
        }
        return super.obterInsignia()
    }
}