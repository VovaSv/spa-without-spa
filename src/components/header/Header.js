import { DivComponent } from "../div-component";
import './header.css';

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.el.classList.add('header');
        this.el.insertAdjacentHTML('afterbegin', `
        <div>
            <img src="/static/logo.svg" alt="logo">
        </div>
        <div class="menu">
            <a class="menu__item" href="#">
                <img src="/static/search.svg" alt="Book searching">
                    Book searching
            </a>
            <a class="menu__item" href="#">
                <img src="/static/favorites.svg" alt="Book searching">
                    Favorites
                    <div class="menu__counter">
                        ${this.appState.favorites.length}
                    </div>
            </a>
        </div>
        `);
        return this.el;
    }
}