<script>
    export let pokemon;
    const abilities = pokemon.abilities
    const stats = pokemon.stats
</script>

<div class="stats w-96 p-2 rounded-md shadow-lg">
    <div>
        <div class="flex flex-row text-gray-800 justify-between">
            Abilities:&nbsp;
            {#each abilities as ability}
                <div class=""><strong>{ability.ability.name}</strong></div>
            {/each}
        </div>
        <div>
            {#each stats as stat}
                <div class="capitalize text-gray-800 flex flex-row justify-between">{stat.stat.name}: <strong>{stat.base_stat}</strong></div>
            {/each}
        </div>
    </div>
</div>

<style>
    .stats{
        background-color: #cadbbf;
    }
</style>