import { AbstractView } from "../../components/AbstractView";
import onChange from "on-change";
import { Header } from "../../components/header/Header";
import { Search } from "../../components/search/Search";
import { CardList } from "../../components/card-list/CardList";
import { Card } from "../../components/card/Card";


export class FavoriteView extends AbstractView {
    
    constructor(appState) {
        super();
        console.log(appState)
        this.appState = onChange(appState, this.onChangeAppState.bind(this));
        this.setTitle('Favorites');
    }

    onChangeAppState(path) {
        if(path === 'favorites') {
            this.render();
        }

    }

    render() {
        const title = document.createElement('div');
        title.innerHTML = `<h1> Favorites </h1>`

        const favorites = document.createElement('div');
        favorites.classList.add('favorites');
        //favorites.append(this.cardList.render());
        this.app.innerHTML = '';
        this.app.append(title);
        this.renderHeader();
        /*
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card_grid');

        if (this?.appState?.favorites?.length > 0) {
            for (const card of this.appState.favorites) {
             cardGrid.append(new Card(this.appState, card).render())
            }
            favorites.append(cardGrid);   
         }
         */
        favorites.append(new CardList(this.appState, {list: this.appState.favorites}).render());
        this.app.append(favorites);

    }

    renderHeader() {
        const HeaderComponent = new Header(this.appState).render();
        this.app.prepend(HeaderComponent);
    }

}