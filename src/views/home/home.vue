<script lang="ts" src="./home.ts"></script>
<style scoped src="./home.css"></style>

<template>
  <div v-if="!isMobile" class="home-container">
    <div class="pokemon-container">
      <PokemonCard v-for="(item, index) in pokemonArray" :key="index" :data="item"/>
    </div>
    <Pagination v-if="totalPages!==0" :totalPages="totalPages" :currentPage="currentPage" @changePage="changePage"/>
  </div>

  <!-- Mobile-responsive -->
  <div v-else>

  </div>

</template>
