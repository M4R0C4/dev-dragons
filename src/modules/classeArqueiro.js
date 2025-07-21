import { Personagem } from "./personagem.js";
export class classeArqueiro extends Personagem {
    destreza
    static tipo = 'Arqueiro'
    static descricao = 'Vocês são esmagados pela fúria do Arqueiro!'
    constructor(nome, destreza) {
        super(nome, )
        this.destreza = destreza
    }
    obterInsignia() {
        if (this.level >= 5 && this.destreza >= 5) {
            return `Dominador das Flechas`
        }
        return super.obterInsignia()
    }
}