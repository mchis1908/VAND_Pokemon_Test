import { Vue, Options } from 'vue-class-component'
import { MutationTypes } from "@/store/mutation-types";

@Options({
    props:{
        type: Number,
        arrTypes: Array,
    },
    emits: ['handleSelectType'],
})

export default class PokemonType extends Vue {
    public type!: number;
    public arrTypes!: any;
    private typeWrapper!: HTMLElement;
    public handleSelectType(type:string){
        this.$emit('handleSelectType', type);
    }

    public scrollLeft() {
        const wrapper = document.querySelector('.type-wrapper') as HTMLElement;
        wrapper.scrollLeft -= 100; // Adjust scroll distance as needed
    }

    public scrollRight() {
        const wrapper = document.querySelector('.type-wrapper') as HTMLElement;
        wrapper.scrollLeft += 100; // Adjust scroll distance as needed
    }

    private scrollTo(position: number) {
        const wrapper = this.typeWrapper;
        const scrollStep = Math.abs(wrapper.scrollLeft - position) / 10; // Number of steps
        let count = 0;

        const scrollInterval = setInterval(() => {
            count++;
            wrapper.scrollLeft += position > wrapper.scrollLeft ? scrollStep : -scrollStep;

            if (count >= 10) {
                clearInterval(scrollInterval);
            }
        }, 15); // Adjust scroll speed as needed
    }
}