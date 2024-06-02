<script lang="ts" src="./pokemon_card.ts"></script>
<style scoped lang="css" src="./pokemon_card.css"></style>

<template>
    <div class="pokemon_card" :style="{ color: getTypeColor(data.type_1) }">
        <img :src="`https://api.vandvietnam.com/api/pokemon-api/pokemons/${data.id}/sprite`" alt="Pokemon Image" />
        <p style="font-weight: 600 ">{{ data.name }}</p>
        <p>{{ capitalizeFirstLetter(filter) }}: {{ data[filter] }}</p>
    </div>
</template>