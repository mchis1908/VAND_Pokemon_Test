<script lang="ts" src="./header.ts"></script>
<style scoped lang="css" src="./header.css"></style>

<template>
    <div class="header">
        <p style="font-size: 24px; color: #169C8A; font-weight: 600">Pokemon</p>
        <div class="arrange-container">
            <div class="filter-container">
                <p>Filter by:</p>
                <div class="filter modal" @click="showModal = !showModal">
                    <p>{{ capitalizeFirstLetter(filterQuery)  }}</p>
                    <img src="@/assets/arrowDown.svg" :style="showModal ? 'transform: rotate(180deg)' : ''">
                    <Transition name="slide-fade">
                        <div v-if="showModal" class="modal-sort">
                            <p class="sort-item" v-for="(item, index) in arrFilter" :key="index" @click="filterQuery= item" :style="filterQuery === item ? 'font-weight: 500; color: #169C8A' : ''">{{ capitalizeFirstLetter(item) }}</p>
                        </div>
                    </Transition>
                </div>
                <img v-if="sort==='-'" src="@/assets/sort_asc.svg" style="width: 20px; cursor: pointer;" @click="changeSort(sort)">
                <img v-else src="@/assets/sort_desc.svg" style="width: 20px; cursor: pointer;" @click="changeSort(sort)">
            </div>
            
            <div class="search-container">
                <p>Search:</p>
                <div>
                    <input
                        class="input-search"
                        type="text"
                        v-model="searchQuery"
                        placeholder="Enter input name"
                    />
                </div>
            </div>
        </div>
    </div>
</template>