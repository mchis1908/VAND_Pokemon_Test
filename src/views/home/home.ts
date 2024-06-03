import { Options, Vue } from "vue-class-component";
import { defineAsyncComponent } from "vue";
import { MutationTypes } from "@/store/mutation-types";

const Pagination = defineAsyncComponent(() => import('@/components/pagination/pagination.vue'));
const PokemonCard = defineAsyncComponent(() => import('@/components/pokemon_card/pokemon_card.vue'));
const Header = defineAsyncComponent(() => import('@/components/header/header.vue'));
const PokemonType = defineAsyncComponent(() => import('@/components/pokemon_type/pokemon_type.vue'));
const DetailPokemon = defineAsyncComponent(() => import('@/components/detail_pokemon/detail_pokemon.vue'));

@Options({
  components: {
    Pagination,
    PokemonCard,
    Header,
    PokemonType,
    DetailPokemon
  },
  props: {
    userId: Number,
  },
})

export default class Home extends Vue {
  public filter: string = 'total';
  public sort: string = '';
  public type: any = '';
  public arrTypes: any = [];
  public searchQuery: string = '';
  public currentPage: number = 1;
  public totalPages: any = 1;
  public pokemonArray:any = [];
  public selectedPokemon:any;
  public showDetailPopup:any = false;
  public loading: boolean = false;

  public async beforeMount(){
    await this.handleGetTypes();
    const typeAll={
      id: '',
      name: 'All'
    }
    this.arrTypes.unshift(typeAll);
  }

  public async mounted() {
    await this.getAllPokemons(this.currentPage, this.filter, this.searchQuery, this.type);
  }

  public async getAllPokemons(page:number = 1, filter: string ='total', searchQuery:string='', type:string = '') {
    this.loading = true;
    this.pokemonArray = [];
    const perPage = 24;
    const payload = {
      'page[size]' : perPage,
      'page[number]': page,
      'sort': this.sort+ filter,
      'filter[name]' : searchQuery,
      'filter[type]' : type,
    };
    const res: any = await this.$store.dispatch(MutationTypes.GET_ALL_POKEMONS, payload);
    if (res.status === 200) {
      this.totalPages= res.data.meta.last_page;
      this.pokemonArray = await res.data.data;
    }
    this.loading = false;
  }

  public async handleGetTypes(){
    this.loading = true;
    const res: any = await this.$store.dispatch(MutationTypes.GET_TYPES);
    if (res.status === 200) {
      this.arrTypes= res.data.data;
    }
    this.loading = false;
  }

  public async changePage(value:any) {
    this.currentPage = value;
    await this.getAllPokemons(this.currentPage, this.filter, this.searchQuery, this.type);
  }

  public async handleSearch(searchQuery:string) {
    this.searchQuery = searchQuery;
    this.currentPage = 1;
    await this.getAllPokemons(this.currentPage, this.filter, this.searchQuery, this.type);
  }

  public async handleFilter(filterQuery:string, sort:string) {
    this.filter = filterQuery;
    this.sort = sort;
    this.currentPage = 1;
    await this.getAllPokemons(this.currentPage, this.filter, this.searchQuery, this.type);
  }
  
  public async handleSelectType(type:number){
    this.type = type;
    this.currentPage = 1;
    await this.getAllPokemons(this.currentPage, this.filter, this.searchQuery, this.type);
  }

  public showDetail(pokemon:any) {
    this.selectedPokemon = pokemon;
    this.showDetailPopup = true;
  }

  public closeDetail() {
    this.showDetailPopup = false;
  }
}
