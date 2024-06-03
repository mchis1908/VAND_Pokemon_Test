<script lang="ts" src="./home.ts"></script>
<style scoped src="./home.css"></style>

<template>
  <div class="home-container">
    <Header @handleSearch="handleSearch" @handleFilter="handleFilter"/>
    <PokemonType @handleSelectType="handleSelectType" :type="type" :arrTypes="arrTypes"/>
    <div class="pokemon-container">
      <PokemonCard v-for="(item, index) in pokemonArray" :key="index" :data="item" :filter="filter" @click="showDetail(item)"/>
    </div>
    <Pagination v-if="totalPages!==0" :totalPages="totalPages" :currentPage="currentPage" @changePage="changePage"/>
    
    <DetailPokemon v-if="showDetailPopup" :pokemon="selectedPokemon" @closeDetail="closeDetail" :arrTypes="arrTypes"/>
    <div v-if="loading" class="spinner"></div> <!-- Spinner element -->
  </div>

</template>
