<script lang="ts" src="./pokemon_card.ts"></script>
<style scoped lang="css" src="./pokemon_card.css"></style>

<template>
    <div class="pokemon_card" :style="{ color: getTypeColor(data.type_1) }">
        <img v-if="imageUrl" :src="imageUrl" alt="Pokemon Image" />
        <p v-else>Loading image...</p>
        <p style="font-weight: 600 ">{{ data.name }}</p>
        <p>{{ capitalizeFirstLetter(filter) }}: {{ data[filter] }}</p>
    </div>
</template>