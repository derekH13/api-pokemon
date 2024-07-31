import {pokeDados, imagemPoke, typePoke} from './Util'

export class Pokemon{
    private height: number
    private id: number
    private name: string
    private sprites: imagemPoke
    private types: typePoke[]
    private weight: number

    constructor(dados: pokeDados) 
    {
        this.height = dados.height;
        this.id = dados.id;
        this.name = dados.name;
        this.sprites = dados.sprites
        this.types = dados.types
        this.weight = dados.weight
    }


    private creatEl(tag: string, classes: string){
        const el = document.createElement(tag)
        el.className = classes

        return el
    }


    public montarCard(pai: HTMLElement){
        const card = this.creatEl('div', 'card-poke')
  
        if(this.types.length === 1){
            card.innerHTML = `
              <div><img src="${this.sprites.front_default}" alt=""></div>
            <h1 class="nome-poke">${this.name}</h1>

            <div class="flex tipo-poke">
                <span class = "${this.types[0].type.name}">${this.types[0].type.name}</span>
            </div>

            <div class="info-poke">
                <div class="altura">
                    <h2>${this.height} M</h2>
                    <h3>Altura</h3>
                </div>

                <div class="peso">
                    <h2>${this.weight} KG</h2>
                    <h3>Peso</h3>
                </div>
            </div><!--flex-->
                <a href="pokemon.html"><button>Mais Detalhes</button></a>
            `
        }
        if(this.types.length >= 2){
            card.innerHTML = `
              <div><img src="${this.sprites.front_default}" alt=""></div>
            <h1 class="nome-poke">${this.name}</h1>

            <div class="flex tipo-poke">
                <span class = "${this.types[0].type.name}">${this.types[0].type.name}</span>
                <span class = "${this.types[1].type.name}">${this.types[1].type.name}</span>
            </div>

            <div class="info-poke">
                <div class="altura">
                    <h2>${this.height} M</h2>
                    <h3>Altura</h3>
                </div>

                <div class="peso">
                    <h2>${this.weight} KG</h2>
                    <h3>Peso</h3>
                </div>
            </div><!--flex-->
                <a href="pokemon.html"><button>Mais Detalhes</button></a>
            `
        }


        this.backColorP(card, pai)
       


    }

    private backColorP(card: HTMLElement, pai: HTMLElement){
    // Verifique se `this.types` está definido e tem pelo menos um elemento
    const type1 = this.types[0]?.type?.name;
    // Verifique se existe um segundo tipo antes de acessá-lo
    const type2 = this.types[1]?.type?.name;

    // Aplique a classe CSS apropriada com base nos tipos
    if (type1 === 'water') {
        card.classList.add('fundo-water');

    } else if (type1 === 'fire') {
        card.classList.add('fundo-fire');

    } else if (type1 === 'grass') {
        card.classList.add('fundo-grass');

    } else if(type1 === 'normal'){
        card.classList.add('fundo-normal');

    } else if(type1 === 'flying'){
        card.classList.add('fundo-flying');

    } else if(type1 === 'poison'){
        card.classList.add('fundo-poison');

    } else if(type1 === 'bug'){
        card.classList.add('fundo-bug');

    } else if(type1 === 'dragon'){
        card.classList.add('fundo-dragon');

    } else if(type1 === 'ghost'){
        card.classList.add('fundo-ghost');

    } else if(type1 === 'steel'){
        card.classList.add('fundo-steel');

    } else if(type1 === 'ice'){
        card.classList.add('fundo-ice');

    } else if(type1 === 'psychic'){
        card.classList.add('fundo-psychic');

    } else if(type1 === 'ground'){
        card.classList.add('fundo-ground');

    } else if(type1 === 'rock'){
        card.classList.add('fundo-rock');

    } else if(type1 === 'dark'){
        card.classList.add('fundo-dark');

    }






    
        pai.append(card)

    
        
    }
}