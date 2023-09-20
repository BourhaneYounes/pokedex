<script lang="ts">
    export let pokemon: any
</script>

<a href={`/pokemon/${pokemon.id}`}>
    <div class="p-4 bg-custom-green text-gray-800 text-center rounded-md shadow hover:shadow-xl flex flex-col items-center">
        <p class="id">#{pokemon.id}</p>
        <img src={pokemon.image} alt={pokemon.name}>
        {pokemon.name}
    </div>
</a>

<style>
    .id{
        color: gray;
    }
</style>