import {Util, pokeDados, pokemonTipo} from './classes/Util'
import {Pokemon} from './classes/pokemon'

const InputPesq: HTMLInputElement | null = document.querySelector('.input-group input')
const pai: HTMLElement | null = document.querySelector('.grid-dex')









// ============================= função ==================================


//função de fazer a requisição do nome do pokemon
const pesquisarPoke = () => {
    if(!InputPesq)return

    const pesquisa = InputPesq.value

    Util.requisicao(pesquisa).then(result => { 
        if(!result)return
        
        let pokePerson = new Pokemon(result)

        if(!pai)return
        pokePerson.montarCard(pai)
        
    
    })

}

//requisição atraves do array que o tipo retorna
const tipoPokemon = (tipo: string) => {

    const pai: HTMLElement | null = document.querySelector('.grid-dex')
    if(!pai)return


    //limpando a grid
    let cardDex: NodeListOf<HTMLElement> | undefined = pai.querySelectorAll('.card-poke')
    for(const card of cardDex){
        card.remove()
    }





    Util.requisicaoTipos(tipo).then(data => {
        if(!data)return

        for(let i = 0; i < 40; i ++){

            Util.requisicao(data[i].pokemon.name).then(data => {
                if(!data)return
                if(!pai)return
    
                let pokePerson = new Pokemon(data)
    
                pokePerson.montarCard(pai)
            })
        }





    })
}









// ===================================== event ===================================

const btnPesquisa: HTMLButtonElement | null = document.querySelector('#button-addon2')
const btnPsifico:  HTMLButtonElement | null = document.querySelector('.tipoPsifico')
const btnDark:  HTMLButtonElement | null = document.querySelector('.tipoDark')
const btnPlanta:  HTMLButtonElement | null = document.querySelector('.tipoGrass')
const btnBug:  HTMLButtonElement | null = document.querySelector('.tipoBug')
const btnFlying:  HTMLButtonElement | null = document.querySelector('.tipoFlying')
const btnNormal:  HTMLButtonElement | null = document.querySelector('.tipoNormal')
const btnWater:  HTMLButtonElement | null = document.querySelector('.tipoWater')
const btnDragon:  HTMLButtonElement | null = document.querySelector('.tipoDragon')
const btnGhost:  HTMLButtonElement | null = document.querySelector('.tipoGhost')
const btnPoison:  HTMLButtonElement | null = document.querySelector('.tipoPoison')
const btnFire:  HTMLButtonElement | null = document.querySelector('.tipoFire')
const btnIce:  HTMLButtonElement | null = document.querySelector('.tipoIce')








if(btnPsifico){
    btnPsifico.addEventListener('click', () => tipoPokemon('psychic'))
}

if(btnDark){
    btnDark.addEventListener('click', () => tipoPokemon('dark'))
}

if(btnPlanta){
    btnPlanta.addEventListener('click', () => tipoPokemon('grass'))
}

if(btnBug){
    btnBug.addEventListener('click', () => tipoPokemon('bug'))
}

if(btnFlying){
    btnFlying.addEventListener('click', () => tipoPokemon('flying'))
}

if(btnNormal){
    btnNormal.addEventListener('click', () => tipoPokemon('normal'))
}

if(btnWater){
    btnWater.addEventListener('click', () => tipoPokemon('water'))
}

if(btnDragon){
    btnDragon.addEventListener('click', () => tipoPokemon('dragon'))
}

if(btnGhost){
    btnGhost.addEventListener('click', () => tipoPokemon('ghost'))
}

if(btnPoison){
    btnPoison.addEventListener('click', () => tipoPokemon('poison'))
}

if(btnFire){
    btnFire.addEventListener('click', () => tipoPokemon('fire'))
}

if(btnIce){
    btnIce.addEventListener('click', () => tipoPokemon('ice'))
}




if(btnPesquisa){
btnPesquisa.addEventListener('click', pesquisarPoke)
}


tipoPokemon('water')