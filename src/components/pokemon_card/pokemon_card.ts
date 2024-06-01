import { Vue, Options } from 'vue-class-component';

@Options({
    props: {
        data: Object,
    },
    emits: ['changePage']
})

export default class PokemonCard extends Vue {
    public data!: any;
    public imageUrl: string | null = null; // Declare imageUrl property
    public isLoading: boolean = false; // Add isLoading property

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
}
