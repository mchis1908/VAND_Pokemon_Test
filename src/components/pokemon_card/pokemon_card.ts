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
    public imageUrl: string | null = null; 
    public isLoading: boolean = false; 

    public mounted() {
        const imageUrl = `https://api.vandvietnam.com/api/pokemon-api/pokemons/${this.data.id}/sprite`;

        // Set isLoading to true when fetching starts
        this.isLoading = true;

        fetch(imageUrl)
        .then(response => {
            if (!response.ok) {
                // Set isLoading to false in case of bad request
                this.isLoading = false;
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.blob();
        })
        .then(blob => {
            this.imageUrl = URL.createObjectURL(blob);
        })
        .catch(error => {
            console.error('Error fetching the image:', error);
            // Set isLoading to false in case of error
            this.isLoading = false;
        });
    }

    public getTypeColor(typeId:any) {
        return this.typeColors[typeId] || "#000";
    }

    public capitalizeFirstLetter(text:string) {
        if (!text) return '';
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
}
