export interface imagemPoke{
    front_default: string
    front_shiny: string
}

export interface typePoke{
    type: { name: string}
}


export interface pokeDados{
    height: number,
    id: number,
    name: string,
    sprites: imagemPoke,
    types: typePoke[],
    weight: number
}

export interface pokemonTipo{
    pokemon: {
        name: string
        url: string
    }
}





export class Util{
    static async requisicao(pesquisa: string): Promise<pokeDados | undefined>{
        try{
            const Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisa}`)

            if(!Response){
                throw new Error(`requisição deu ruim ${Error}`)
            }

            const dados: pokeDados = await Response.json();

            const result: pokeDados = {
                height: dados.height,
                id: dados.id,
                name: dados.name,
                sprites: dados.sprites,
                types: dados.types,
                weight: dados.weight
            }

            return result

        }catch(error){
            console.error(`Consulta não efetuada ${error}`)
        }
    }

    static async requisicaoTipos(pesquisa: string): Promise<pokemonTipo[] | undefined>{
        try{
            const Response = await fetch(`https://pokeapi.co/api/v2/type/${pesquisa}`)

            if(!Response){
                throw new Error(`requisição deu ruim ${Error}`)
            }

            const dados = await Response.json();


            const result: pokemonTipo[] = dados.pokemon
            
            return result

        }catch(error){
            console.error(`Consulta não efetuada ${error}`)
        }
    }

}