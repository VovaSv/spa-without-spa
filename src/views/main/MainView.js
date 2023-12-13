import { AbstractView } from "../../components/AbstractView";
import onChange from "on-change";
import { Header } from "../../components/header/Header";
import { Search } from "../../components/search/Search";
import { CardList } from "../../components/card-list/CardList"


export class MainView extends AbstractView {

    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0
    }
    
    constructor(appState) {
        super();
        console.log(appState)
        this.appState = onChange(appState, this.onChangeAppState.bind(this));
        this.state = onChange(this.state, this.onChangeState.bind(this))
        this.setTitle('Book Searching');
        this.cardList = new CardList(this.appState, this.state);
    }

    async loadList(searchQuery, offset) {
        //offset - how many items to skip from the beginning of the result
        const res = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}&offset=${offset}&limit=10`);
        return res.json();
    }

    onChangeAppState(path) {
        if(path === 'favorites') {
            this.render();
        }

    }

    async onChangeState(path) {
        if(path === 'searchQuery') {
            console.log(this.state[path]);
            this.state.loading = true;
            const data = await this.loadList(this.state[path], 0);
            this.state.loading = false;
            this.state.list = data.docs;
            console.log(this.state.list)
        }
        if(path === 'loading') {
            console.log(this.state[path]);
            console.log("Loading happen")
            this.cardList.toggleLoader();
        }
        if(path === 'list') {
            console.log(this.state[path]);
            console.log("Card List Updated")
            this.cardList.render();
        }

    }

    render() {
        const main = document.createElement('div');
        main.classList.add('main');
        main.append(new Search(this.state).render());
        main.append(this.cardList.render());
        this.app.innerHTML = '';
        this.app.append(main);
        this.renderHeader()
        console.log(this.appState)
    }

    destroy() {
        onChange.unsubscribe(this.appState);
        onChange.unsubscribe(this.state)
    }

    renderHeader() {
        const HeaderComponent = new Header(this.appState).render();
        this.app.prepend(HeaderComponent);
    }
}