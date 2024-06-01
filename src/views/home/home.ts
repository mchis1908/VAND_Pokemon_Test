import { Options, Vue } from "vue-class-component";
import { defineAsyncComponent } from "vue";
import { MutationTypes } from "@/store/mutation-types";

const Pagination = defineAsyncComponent(() => import('@/components/pagination/pagination.vue'));
const PokemonCard = defineAsyncComponent(() => import('@/components/pokemon_card/pokemon_card.vue'));

@Options({
  components: {
    Pagination,
    PokemonCard
  },
  props: {
    userId: Number,
  },
  watch:{
    currentPage: {
      async handler(val, oldVal) {
        await this.getAllPokemons(this.currentPage, this.filter);
      },
    },
    filter: {
      async handler(val, oldVal) {
        await this.getAllPokemons(this.currentPage, this.filter);
      },
    },
  }
})

export default class Home extends Vue {
  public isMobile: any = 0;
  public filter: string = 'number';
  public currentPage: number = 1;
  public totalPages: any = 1;
  public pokemonArray:any = [];
  public arrImage:any = [];

  public async beforeMount(){

  }

  public async mounted() {
    await this.getAllPokemons(this.currentPage, this.filter);

  }

  public async getAllPokemons(page:number = 1, filter: string ='number') {
    this.pokemonArray = [];
    const perPage = 12;
    const payload = {
      'page[number]': page,
      'page[size]' : perPage,
      'sort': filter      
    };
    const res: any = await this.$store.dispatch(MutationTypes.GET_ALL_POKEMONS, payload);
    if (res.status === 200) {
      this.totalPages= res.data.meta.last_page;
      this.pokemonArray = await res.data.data;
    }
  }

  public async changePage(value:any) {
    this.currentPage = value;
  }
  
}
