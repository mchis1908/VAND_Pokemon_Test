<script lang="ts" src="./detail_pokemon.ts"></script>
<style scoped lang="css" src="./detail_pokemon.css"></style>

<template>
    <div class="backdrop" @click="closeDetail"></div>
    <div class="detail-pokemon">
        <div style="display:flex; flex-direction:column; align-items: flex-end; gap:8px;">
            <img src="@/assets/close.svg" @click="closeDetail" style="margin-top: 4px; cursor:pointer"/>
            <div style="display:flex; flex-direction:column; align-items: center; gap:8px; width: 100%" >
                <img :src="`https://api.vandvietnam.com/api/pokemon-api/pokemons/${pokemon?.id}/sprite`" style="height: 96px; width:96px; object-fit: contain" alt="Pokemon Image" />
                <div style="display:flex; flex-direction:column; justify-content:start; align-items:center; gap:8px " >
                    <p style="font-weight: 600; font-size: 18px;">{{ pokemon?.name }}</p>
                    <p style="color: #ADADAD">Number: #{{ pokemon?.number }}</p>
                    <div style="display:flex; flex-direction:row; justify-content:start; gap:8px " >
                        <div v-if="pokemon?.type_1!==null" class="pokemon_type" :style="{ background: getTypeColor(pokemon.type_1) }">{{ arrTypes[pokemon?.type_1 +1]?.name }}</div>
                        <div v-if="pokemon?.type_2!==null"  class="pokemon_type" :style="{ background: getTypeColor(pokemon.type_2) }">{{ arrTypes[pokemon?.type_2 +1]?.name }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div style="display:flex; flex-direction:column; justify-content:start; align-items:start; gap:8px;" >
            <div class="percentage-wrapper">
                <div class="label">TOTAL</div>
                <div class="progress-container">
                    <div class="percentage" :style="{width: getPercentage(pokemon.total, 1000), background: getTypeColor(pokemon.type_1)}"></div>
                    <div class="point" :style="{left: getPercentage(pokemon.total, 1000),}">{{  pokemon?.total }}</div>
                </div>
            </div>
            <div class="percentage-wrapper">
                <div class="label">HP</div>
                <div class="progress-container">
                    <div class="percentage" :style="{width: getPercentage(pokemon.hp, 300), background: getTypeColor(pokemon.type_1)}"></div>
                    <div class="point" :style="{left: getPercentage(pokemon.hp, 300),}">{{  pokemon?.hp }}</div>
                </div>
            </div>
            <div class="percentage-wrapper">
                <div class="label">ATTACK</div>
                <div class="progress-container">
                    <div class="percentage" :style="{width: getPercentage(pokemon.attack, 300), background: getTypeColor(pokemon.type_1)}"></div>
                    <div class="point" :style="{left: getPercentage(pokemon.attack, 300),}">{{  pokemon?.attack }}</div>
                </div>
            </div>
            <div class="percentage-wrapper">
                <div class="label">DEFENSE</div>
                <div class="progress-container">
                    <div class="percentage" :style="{width: getPercentage(pokemon.defense, 300), background: getTypeColor(pokemon.type_1)}"></div>
                    <div class="point" :style="{left: getPercentage(pokemon.defense, 300),}">{{  pokemon?.defense }}</div>
                </div>
            </div>
            <div class="percentage-wrapper">
                <div class="label">SP_ATK</div>
                <div class="progress-container">
                    <div class="percentage" :style="{width: getPercentage(pokemon.sp_atk, 300), background: getTypeColor(pokemon.type_1)}"></div>
                    <div class="point" :style="{left: getPercentage(pokemon.sp_atk, 300),}">{{  pokemon?.sp_atk }}</div>
                </div>
            </div>
            <div class="percentage-wrapper">
                <div class="label">SP_DEF</div>
                <div class="progress-container">
                    <div class="percentage" :style="{width: getPercentage(pokemon.sp_def, 300), background: getTypeColor(pokemon.type_1)}"></div>
                    <div class="point" :style="{left: getPercentage(pokemon.sp_def, 300),}">{{  pokemon?.sp_def }}</div>
                </div>
            </div>
            <div class="percentage-wrapper">
                <div class="label">SPEED</div>
                <div class="progress-container">
                    <div class="percentage" :style="{width: getPercentage(pokemon.speed, 300), background: getTypeColor(pokemon.type_1)}"></div>
                    <div class="point" :style="{left: getPercentage(pokemon.speed, 300),}">{{  pokemon?.speed }}</div>
                </div>
            </div>
        </div>
    </div>
</template>