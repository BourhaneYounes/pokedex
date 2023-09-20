type IndexPokemon = {
    name: string
    url: string
}


export const load = async ({ fetch }) => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1021')
    const data = await resp.json()
    const pokemons: Pokemon[] = data.results.map((pokemon: IndexPokemon) => {
        const splitUrl = pokemon.url.split('/')
        const id = splitUrl[splitUrl.length - 2 ]
        return {
            name: pokemon.name,
            url: pokemon.url,
            id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            //image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`,
        }
    })
    
    return{
        pokemons,
    }
}