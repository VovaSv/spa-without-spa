import { MainView } from "./views/main/MainView";
import { FavoriteView } from "./views/favorite/FavoriteView";


class App {
    routes = [
        {path: "/", view: MainView},
        {path: "/favorites", view: FavoriteView}
    ];

    appState = {
        favorites: []
    }

    constructor() {
        //window.addEventListener('hashchange', this.render.bind(this));
        window.addEventListener('popstate', this.render.bind(this));
        //window.addEventListener('beforeunload ',  this.route3.bind(this));
        //window.addEventListener('unload',  this.route4.bind(this));
        //window.addEventListener('load',  this.route2.bind(this));
        //window.addEventListener('DOMContentLoaded',  this.route6.bind(this));
        window.addEventListener('navigate', (event) => {
            console.log('catched Event in app: ', event)
            console.log(event)
            this.navigateTo(event.detail.path)});
        this.render();
    }

    render() {
        if (this.currentView) {
            this.currentView.destroy();
        }
        console.log('App - render')
        console.log('location.pathname: ', location.pathname)
        console.log('location: ', location)
        const View = this.routes.find(route => route.path === location.pathname).view;
        this.currentView = new View(this.appState);
        this.currentView.render();

    }

    navigateTo(path) {
        history.pushState({}, '', path);
        this.render();

    }

}

new App();