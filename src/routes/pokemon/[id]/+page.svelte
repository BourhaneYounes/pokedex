<script>
    import PokeStats from '../../../components/pokeStats/PokeStats.svelte';
    export let data;
    const types = data.pokemon.types
</script>

<div class="p-4 my-10 mx-auto flex flex-col items-center rounded bg-custom-green shadow-lg bg-cutsom-green w-1/2 h-auto">
    <div class="w-full items-center flex flex-col py-1">
        <p class="id">#{data.pokemon.id}</p>
        <h1 class="text-4xl text-center my-8 uppercase">{data.pokemon.name}</h1>
        <div class="flex flex-row">
            Type:
            {#each types as type}
                <div>&nbsp;-&nbsp;<strong  class="{type.type.name}">{type.type.name}</strong></div>
            {/each}
            &nbsp;|&nbsp;Height: &nbsp;<strong>{data.pokemon.height} </strong>&nbsp;|&nbsp;
            &nbsp;Weight: &nbsp;<strong>{data.pokemon.weight}</strong>
        </div>

        <img src="{data.pokemon.sprites.front_default}" alt={data.pokemon.name} class="block w-40 object-cover h-40">
    </div>
    <div>
        <PokeStats pokemon={data.pokemon}/>
    </div>
    
</div>

<style>
    .id{
        color: gray;
    }
</style>

