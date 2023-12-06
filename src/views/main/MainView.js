import { AbstractView } from "../../components/AbstractView";
import onChange from "on-change";
import { Header } from "../../components/header/Header";
import { Search } from "../../components/search/Search";


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
        //this.state = onChange(this.state, this.onChangeState.bind(this))
        this.setTitle('Book Searching')
    }

    onChangeAppState(path) {
        console.log('On change AppState catch changes on: ' + path);
        console.log('On change AppState catch changes on: ' + path);
        console.log('----');
        console.log(this)
    }

    onChangeState(path) {
        console.log('On change State catch changes on' + path);
    }

    render() {
        const main = document.createElement('div');
        main.append(new Search(this.state).render())
        this.app.innerHTML = '';
        this.app.append(main);
        this.renderHeader()
        console.log(this.appState)
        this.appState.favorites.push('d')
    }

    renderHeader() {
        const HeaderComponent = new Header(this.appState).render();
        this.app.prepend(HeaderComponent);
    }
}