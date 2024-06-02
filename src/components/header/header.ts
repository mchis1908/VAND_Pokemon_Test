import { Vue, Options } from 'vue-class-component'
import debounce from 'lodash/debounce';

@Options({
    emits: ['handleSearch', 'handleFilter'],
    watch:{
        searchQuery: debounce(function (this: any, newValue: string) {
          this.handleSearch(this.searchQuery);
        }, 500),
        filterQuery: {
            async handler(val, oldVal) {
                this.handleFilter(val);
            },
        },
    }
})

export default class Header extends Vue {
    public searchQuery: string= '';
    public showModal: any = false;
    public filterQuery: string = 'number';
    public arrFilter: any = ['number', 'total', 'hp', 'attack', 'defense', 'sp_atk', 'sp_def', 'speed'];

    public mounted() { 
        document.addEventListener('click', this.handleClickOutside);
    }
    
    public unmounted() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    public handleSearch(searchQuery:string){
        this.$emit('handleSearch', searchQuery);
    }

    public handleFilter(filterQuery:string){
        this.$emit('handleFilter', filterQuery);
    }

    public handleClickOutside = (event: any) => {
        if (this.showModal && !event.target.closest('.modal')) {
          this.showModal = false;
        }
    };

    public capitalizeFirstLetter(text:string) {
        if (!text) return '';
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
}