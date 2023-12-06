import { DivComponent } from "../div-component";
import './search.css';

export class Search extends DivComponent {
    constructor(state) {
        super();
        this.state = state;
    }

    render() {
        this.el.classList.add('search');
        this.el.insertAdjacentHTML('afterbegin', `
        <div class="search__wrapper">
           <input 
                type="text"
                placeholder="Find book or author..."
                class="search__input"
                value="${this?.state?.searchQuery ? this.state.searchQuery : ''}"
            />
            <img src="/static/search.svg" alt="Search Icon">
        </div>
        <button class="menu">
            <img src="/static/search-white.svg" alt="Search Icon">
        </button>
        `);
        return this.el;
    }
}