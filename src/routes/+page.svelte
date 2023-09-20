<script lang="ts">
    import PokeCard from '../components/pokeCard/PokeCard.svelte';
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
        <div>
            <div class="flex flex-row">
                <button>Generation I</button>
                <button>Generation II</button>
                <button>Generation III</button>
                <button>Generation IV</button>
                <button>Generation V</button>
                <button>Generation VI</button>
                <button>Generation VII</button>
                <button>Generation VIII</button>
                <button>Generation IX</button>
            </div>
        </div>
        <div class="grid gap-5 md:grid-cols-6 grid-cols-1">
            {#each filteredPokemon as pokemon (pokemon.id)}
                <PokeCard pokemon={pokemon} />
            {/each}
        </div>
    </div>
</main>
