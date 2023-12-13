import { DivComponent } from "../div-component";
import './card.css';

export class Card extends DivComponent {
    constructor(appState, cardData) {
        super();
        this.appState = appState;
        this.cardData = cardData;
    }

    toogleFavorite() {
        const indexOfExisting = this.appState.favorites.findIndex((book) => book.key === this.cardData.key);
        if(indexOfExisting === -1) {
            this.appState.favorites.push(this.cardData)
        } else {
            const updatedFavorites = this.appState.favorites.toSpliced(indexOfExisting, 1);
            this.appState.favorites = updatedFavorites;
        }
        
    }

 
    render() {
        this.el.classList.add('card');
        const existInFavorites = this.appState.favorites.find((book) => book.key ===this.cardData.key)
        this.el.innerHTML = `
            <div class="card__image">
                <img src="https://covers.openlibrary.org/b/olid/${this.cardData.cover_edition_key}-M.jpg" alt="Cover">
            </div>
            <div class="card__info">
                <div class="card__tag">
                    ${this.cardData.subject ? this.cardData.subject[0] : 'No tagged'}
                </div>
                <div class="card__name">
                    ${this.cardData.title}
                </div>
                <div class="card__author">
                    ${this.cardData.author_name}
                </div>
                <div class="card__footer">
                 <button class="button_add ${existInFavorites ? 'button_add__active' : ''}">
                    ${existInFavorites ?
                        '<img src="/static/favorites.svg">':
                        '<img src="/static/favorite-white.svg">'
                    }
                 </button>
                </div>
            </div>
        `;
        this.el.querySelector('button').addEventListener('click', () => this.toogleFavorite())
        return this.el;
    }
}