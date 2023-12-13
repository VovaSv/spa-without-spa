import { DivComponent } from "../div-component";
import { Card } from "../card/Card";
import onChange from "on-change";
import './card-list.css';



export class CardList extends DivComponent {
    constructor(appState, mainState) {
        super();
        this.appState = appState;
        this.mainState = mainState;
    }

    toggleLoader() {
        const loader = document.createElement('div');
        loader.classList.add('books_loader')
        loader.innerHTML = `<div class="card_list__loader">Loading...</div>`;
        this.el.append(loader);
    }
 
    render() {
        this.el.classList.add('card-list');
        this.el.innerHTML = `
            <h1> Found books - ${this.mainState.list.length} </h1>
        `;
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('card_grid')

        if (this?.mainState?.list?.length > 0) {
           for (const card of this.mainState.list) {
            cardGrid.append(new Card(this.appState, card).render())
           }
        this.el.append(cardGrid);   
        }
        return this.el;
    }
}