import { DivComponent } from "../div-component";
import './search.css';

export class Search extends DivComponent {
    constructor(state) {
        super();
        this.state = state;
    }

    search(event) {
        console.log("Cearch Clicked")
        const inputSearchValue = this.el.querySelector('input').value;
        this.state.searchQuery = inputSearchValue + "";
    }

    render() {
        console.log('Render Search Component')
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
        this.el.querySelector('button').addEventListener('click', this.search.bind(this));
        this.el.querySelector('input').addEventListener('keydown', (event) => {
           if(event.code === 'Enter') {
            this.search();
           }
        });
        return this.el;
    }

}