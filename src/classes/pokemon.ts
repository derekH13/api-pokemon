



export interface Pokemon {
    name: string;
    id: number;
    abilities: string;
    height: number;
    types: string | string[];
    weight: number;
    sprites: string[];
    forms: string;
}















//fazer um class com requisição em cima para chamar o construtor dessa class
export class PokemonDados{
    name: string;
    id: number;
    abilities: string;
    height: number;
    types: string | string[];
    weight: number;
    sprites: string[];
    forms: string;
   
    constructor( e: Pokemon){
        this.name = e.name
        this.id = e.id
        this.abilities = e.abilities
        this.height = e.height
        this.types = e.types
        this.weight = e.weight
        this.sprites = e.sprites
        this.forms = e.forms
}

//craete element e add class
createEl(div: string, classe: string | null){
    const x = document.createElement(div)

    if(classe){
        const array = classe.split()
        for(const a of array){
            x.className = a
        }
    }
    return x
}

//montar card e adicina no elemento pai
montarCard(pai: HTMLElement | null){
    const card = this.createEl('div', 'card-poke')
    const inter = this.createEl('div', 'interface-1')
    const imagem = this.createEl('img', 'imagem')
    const nome = this.createEl('h1', 'nome-poke')
    const flex = this.createEl('div', 'flex tipo-poke')
    const info = this.createEl('div', 'info-poke')
    const altura = this.createEl('div', 'altura')
    const metro = this.createEl('h2', '')
    const metroh3 = this.createEl('h3', '')
    const peso = this.createEl('div', 'peso')
    const pesoh2 = this.createEl('h2', '')
    const pesoh3 = this.createEl('h3', '')
    const Abutton = this.createEl('a', '')
    const button = this.createEl('button', '')


    nome.innerHTML = this.name
    metro.innerHTML = `${this.height}`
    metroh3.innerHTML = 'Altura'
    pesoh2.innerHTML = `${this.weight}`
    pesoh3.innerHTML = `Peso`
    button.innerHTML = 'Mais Detalhes'

    for(const x of this.types){
    const span = this.createEl('span', x)
    span.innerHTML = x
    flex.append(span)
    }

    inter.append(imagem)
    altura.append(metro)
    altura.append(metroh3)
    peso.append(pesoh2)
    peso.append(pesoh3)
    Abutton.append(button)

    info.append(altura)
    info.append(peso)

    card.append(inter)
    card.append(nome)
    card.append(flex)
    card.append(info)
    card.append(Abutton)

    if(!pai) return

    pai.append(card)


}









}