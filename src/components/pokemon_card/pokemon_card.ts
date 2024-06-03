import { Vue, Options } from 'vue-class-component';

@Options({
    props: {
        data: Object,
        filter: String,
    },
    emits: ['changePage']
})

export default class PokemonCard extends Vue {
    public data!: any;
    public filter!: string;
    public imageUrl: string = '';
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
        null: "#000"
    };
    public isLoading: boolean = false; 

    public beforeMount() {
        // this.fetchAndDisplayImage();
    }

    public async fetchAndDisplayImage() {
        this.isLoading = true;
        try {
          const response = await fetch(`https://api.vandvietnam.com/api/pokemon-api/pokemons/${this.data?.id}/sprite`);
          
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
    
          const blob = await response.blob();
          this.imageUrl = URL.createObjectURL(blob); // Update reactive property
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
        } finally {
          this.isLoading = false;
        }
    }

    public getTypeColor(typeId:any) {
        return this.typeColors[typeId] || "#000";
    }

    public capitalizeFirstLetter(text:string) {
        if (!text) return '';
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
}
