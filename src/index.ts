import {PokemonDados, Pokemon,} from './classes/pokemon'

const gridDex: HTMLElement | null = document.querySelector('.grid-dex')

let poke, pesquisar = '102'













// ==================== função ==============================


    //faz a requisição/ deixando de um jeito para facilitar o uso
async function consultaPoke(pesquisa: string): Promise<Pokemon | undefined>{
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`)
    
        if(!response.ok){
            throw new Error(`deu ruim ${(await response).status}`)
        }
        const data: Pokemon = await response.json()
        return data
    
    }catch(Error){
        console.error(`Requisição Não Realizada ${Error}`)
    } 
return
}
    
    //separa as informações que eu vou usar/ usando metodo asyc para poder usar await e trabalhando com promise
async function separaPoke(pesquisa: string): Promise<Pokemon | null>{
    try {
        const data = await consultaPoke(pesquisa);
        if (!data) return null;
    
        const result = {
                name: data.name,
                id: data.id,
                abilities: data.abilities,
                height: data.height,
                types: data.types,
                weight: data.weight,
                sprites: data.sprites,
                forms: data.forms
        };
        return result;
    } catch (error) {
        console.error('Erro ao buscar dados do Pokémon:', error);
        return null;
    }









}













//function para pesquisar por um pokemon
const buscar = () => {
    separaPoke(pesquisar).then(data => {
    if(!data)return

    poke = new PokemonDados(data)

    poke.montarCard(gridDex)


    })


}





// ============================= event =====================

document.querySelector('#button-addon2')?.addEventListener('click', () => {
    const x: HTMLInputElement | null = document.querySelector('input.form-control')
    if(!x)return
    
    pesquisar = x.value
    buscar()
})