<script lang="ts">
    import PokeCard from '../components/pokeCard/PokeCard.svelte';
    import { generations } from './generations';
    export let data
    let searchTerm: string = ""
    let filteredPokemon: any[]= []

    $: {
        if(searchTerm){
            filteredPokemon = data.pokemons.filter(pokemon => pokemon.name.includes(searchTerm.toLowerCase()))
        }else {
            filteredPokemon = [...data.pokemons]
        }
    }

</script>

<main>
    <div class="p-5 flex flex-col">
        <h1 class="text-2xl text-center uppercase my-8">Pokédex</h1>
        <input type="text" bind:value={searchTerm} name="" id="" placeholder="Search Pokemon" class="mx-auto w-1/2 h-10 rounded-md p-2 
        border-2 border-gray-200 shadow text-lg my-6">
        <div class="mx-auto">
            <div class="flex flex-row m-2 my-4">
               {#each generations as generation (generation.id)}
                    <button class="text-xs mx-2 border border-gray-200 bg-gray-300 
                    px-4 py-1 rounded hover:shadow-md w-36">{generation.name} <br> {generation.main_region}</button>
               {/each}
            </div>
            <div class="flex flex-row">
                <button class="text-xs border border-gray-200 bg-gray-300 
                px-4 py-1 rounded hover:shadow-md w-20 mx-auto my-2">All</button>
            </div>
        </div>
        <div class="grid gap-5 md:grid-cols-6 grid-cols-1">
            {#each filteredPokemon as pokemon (pokemon.id)}
                <PokeCard pokemon={pokemon} />
            {/each}
        </div>
    </div>
</main>
