export const load = async ({ params }) => {
    const id: string = params.id
    const url: string = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokemon = await res.json()

    return {
        pokemon
    }
}