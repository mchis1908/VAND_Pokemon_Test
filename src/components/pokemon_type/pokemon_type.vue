
<script lang="ts" src="./pokemon_type.ts"></script>
<style scoped lang="css" src="./pokemon_type.css"></style>

<template>
    <div class="type-container">
        <div class="arrow left" @click="scrollLeft">&#10094;</div>
        <div class="type-wrapper">
            <div v-for="(item, index) in arrTypes" :key="index"
                :class="[type === item?.id ? 'tab_type-active' : 'tab_type']"
                @click="handleSelectType(item?.id)">
                <p>{{ item?.name }}</p>
            </div>
        </div>
        <div class="arrow right" @click="scrollRight">&#10095;</div>
    </div>
</template>