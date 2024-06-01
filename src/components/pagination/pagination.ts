import { Vue, Options } from 'vue-class-component'

@Options({
    props: {
        totalPages: Number,
        currentPage: Number,
    },
    emits: ['changePage']
})

export default class Pagination extends Vue {
    public totalPages!:any;
    public currentPage!:any;

    public changePage(index:any){
        if (index < 1 || index > this.totalPages || index === this.currentPage) {
            return;
        }
        this.$emit('changePage', index);
    }
}