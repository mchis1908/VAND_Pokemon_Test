<script lang="ts" src="./pagination.ts"></script>
<style scoped lang="css" src="./pagination.css"></style>

<template>
    <div class="pagination">
        <div :class="[currentPage < 1? 'disabled' : '', 'direction-button']" @click="changePage(1)">
            <img src="@/assets/arrow-first.svg"/>
        </div>
        <div :class="[currentPage < 1? 'disabled' : '', 'direction-button']" @click="changePage(currentPage-1)">
            <img src="@/assets/arrow-prev.svg"/>
        </div>
        <div v-if="totalPages<4" style="display: flex; flex-direction: row; gap:8px">
            <div :class="[currentPage===index+1 ? 'direction-button-active' : '', 'direction-button']" v-for="(item, index) in totalPages" :key="index" @click="changePage(index+1)">
                {{ index+1 }}
            </div>
        </div>

        <div v-else-if="currentPage< totalPages-2" style="display: flex; flex-direction: row; gap:8px">
            <div :class="[currentPage=== currentPage+index ? 'direction-button-active' : '', 'direction-button']" v-for="(item, index) in 2" :key="index" @click="changePage(currentPage + index)">
                {{ currentPage + index }}
            </div>
            <div class="direction-button">
                ...
            </div>
            <div :class="[currentPage===totalPages ? 'direction-button-active' : '', 'direction-button']" @click="changePage(totalPages)">
                {{ totalPages }}
            </div>
        </div>

        <div v-else style="display: flex; flex-direction: row; gap:8px">
            <div :class="[currentPage=== totalPages - 3 + item ? 'direction-button-active' : '', 'direction-button']" v-for="(item, index) in 3" :key="index" @click="changePage(totalPages - 3 + item)">
                {{ totalPages - 3 + item }}
            </div>
        </div>

        <div class="direction-button" @click="changePage(currentPage+1)">
            <img src="@/assets/arrow-next.svg"/>
        </div>
        <div :class="[currentPage === totalPages? 'disabled' : '', 'direction-button']" @click="changePage(totalPages)">
            <img src="@/assets/arrow-last.svg"/>
        </div>
    </div>
</template>