<script lang="ts">
    import PokeCard from '../components/pokeCard/pokeCard.svelte';
    export let data; 
</script>

<main>
    <div class="p-5">
        <div class="grid gap-5 md:grid-cols-6 grid-cols-1">
            {#each data.pokemons as pokemon (pokemon.id)}
                <PokeCard pokemon={pokemon} />
            {/each}
        </div>
    </div>
</main>
