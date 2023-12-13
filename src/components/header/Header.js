import { DivComponent } from "../div-component";
import './header.css';

const navigateEvent = new CustomEvent("navigate", {
    detail: {
      name: "dog",
    },
  });

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
            <a id="favorites-link" class="menu__item" href="#favorites">
                <img id="" src="/static/favorites.svg" alt="favorites">
                    Favorites
                    <div class="menu__counter">
                        ${this.appState.favorites.length}
                    </div>
            </a>
        </div>
        `);

        setTimeout(() => {
            //Wrapped with setTimeout as looks like after we add element to DOM and emidiatly
            // trying access it via document so this approach not working emidiatly
            //so wrapped with setTimeout
            document.getElementById("favorites-link").addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Catched Event');
                const navigationEvent = new CustomEvent("navigate", {
                    detail: {
                      path: "favorites",
                    },
                  });
                window.dispatchEvent(navigationEvent);  
    
            })

        }, 0);
/*
        this.el.querySelector("#favorites-link").addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Catched Event');
            const navigationEvent = new CustomEvent("navigate", {
                detail: {
                  path: "favorites",
                },
              });
            window.dispatchEvent(navigationEvent);  

        })
        */
        return this.el;
    }
}