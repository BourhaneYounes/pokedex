<script lang="ts">
    import PokeCard from '../components/pokeCard/PokeCard.svelte';
    import { generations } from './generations';
    export let data
    let searchTerm: string = ""
    let filteredPokemon: any[]= data.pokemons

    $: {
        if(searchTerm){
            filteredPokemon = data.pokemons.filter(pokemon => pokemon.name.includes(searchTerm.toLowerCase()))
        }else{
            filteredPokemon = data.pokemons
        }
    }

    function displayPokemon(id: number){
        if (id === 1){
            filteredPokemon = data.pokemons.slice(0, 151)
        }else if (id === 2){
            filteredPokemon = data.pokemons.slice(151, 251)
        }else if (id === 3){
            filteredPokemon = data.pokemons.slice(251, 386)
        }else if (id === 4){
            filteredPokemon = data.pokemons.slice(386, 493)
        }else if (id === 5){
            filteredPokemon = data.pokemons.slice(493, 649)
        }else if (id === 6){
            filteredPokemon = data.pokemons.slice(649, 721)
        }else if (id === 7){
            filteredPokemon = data.pokemons.slice(721, 809)
        }else if (id === 8){
            filteredPokemon = data.pokemons.slice(809, 905)
        }else if (id === 9){
            filteredPokemon = data.pokemons.slice(905, 1021)
        }else if (id === 0){
            filteredPokemon = data.pokemons
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
                    <button class="text-xs mx-2 bg-gray-300 
                    px-4 py-1 rounded shadow-sm hover:shadow-md w-36" on:click|preventDefault={() => displayPokemon(generation.id)}>{generation.name} <br> {generation.main_region}</button>
               {/each}
            </div>
            <div class="flex flex-row">
                <button class="text-xs border border-gray-200 bg-gray-300 
                px-4 py-1 rounded hover:shadow-md w-20 mx-auto my-2" on:click|preventDefault={() => displayPokemon(0)}>All</button>
            </div>
        </div>
        <div class="grid gap-5 md:grid-cols-6 grid-cols-1">
            {#each filteredPokemon as pokemon (pokemon.id)}
                <PokeCard pokemon={pokemon} />
            {/each}
        </div>
    </div>
</main>
