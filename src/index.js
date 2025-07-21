import { Personagem } from './modules/personagem.js';
import { PersonagemView } from './components/personagem-view.js';
import { classeMago } from './modules/classeMago.js';
import { classeArqueiro } from './modules/classeArqueiro.js';
import { classeArqueiroMago } from './modules/arqueiro-mago.js';

//crie os personagens aqui
const mago1 = new classeMago('Mago 1', 'Fogo', 5, 5)
const arqueiro1 = new classeArqueiro('Arqueiro 1', 5)
const arqueiroMago1 = new classeArqueiroMago('Arqueiro Mago 1', 5, 'Fogo', 5, 5)
const personagens = [mago1, arqueiro1, arqueiroMago1]

new PersonagemView(personagens).render()

