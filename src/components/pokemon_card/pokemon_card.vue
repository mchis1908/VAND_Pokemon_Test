<script lang="ts" src="./pokemon_card.ts"></script>
<style scoped lang="css" src="./pokemon_card.css"></style>

<template>
    <div class="pagination">
        <img v-if="imageUrl" :src="imageUrl" alt="Pokemon Image" />
        <p v-else>Loading image...</p>
        <p>{{ data.name }}</p> 
    </div>
</template>