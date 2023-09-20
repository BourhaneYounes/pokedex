<script>
    export let data;
    const types = data.pokemon.types
</script>

<div class="p-5 flex flex-col items-center">
    <div class="w-full items-center flex flex-col py-2">
        <h1 class="text-4xl font-bold text-center my-8 uppercase">{data.pokemon.name}</h1>
        <img src="{data.pokemon.sprites.other.dream_world.front_default}" alt={data.pokemon.name} class="">
    </div>
    <div class="flex flex-row items-center justify-around w-36">
        {#each types as type}
            <div class="rounded-md text-gray-50 uppercase px-1 {type.type.name}">{type.type.name}</div>
        {/each}
    </div>
</div>

