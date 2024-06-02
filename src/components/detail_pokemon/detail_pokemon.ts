import { Vue, Options } from 'vue-class-component'
import debounce from 'lodash/debounce';

@Options({
    props:{
        pokemon: Object,
        arrTypes: Array,
    },
    emits: ['closeDetail']
})

export default class DetailPokemon extends Vue {
    public pokemon!: any;
    public arrTypes!: any;
    public typeColors: any = {
        0: "#A8A77A", // Normal
        1: "#EE8130", // Fire
        2: "#6390F0", // Water
        3: "#7AC74C", // Grass
        4: "#F7D02C", // Electric
        5: "#96D9D6", // Ice
        6: "#C22E28", // Fighting
        7: "#A33EA1", // Poison
        8: "#E2BF65", // Ground
        9: "#A98FF3", // Flying
        10: "#F95587", // Psychic
        11: "#A6B91A", // Bug
        12: "#B6A136", // Rock
        13: "#735797", // Ghost
        14: "#705746", // Dark
        15: "#6F35FC", // Dragon
        16: "#B7B7CE", // Steel
        17: "#D685AD", // Fairy
        null: "#000" // Default or unknown type
    };
    public closeDetail() {
        this.$emit('closeDetail');
    }

    public getTypeColor(typeId:any) {
        return this.typeColors[typeId] || "#000";
    }

    public getPercentage(value:any, maxValue:any){
        return value/maxValue * 100 + '%';
    }
}