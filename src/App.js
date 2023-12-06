import { MainView } from "./views/main/MainView";

class App {
    routes = [
        {path: "/", view: MainView}
    ];

    appState = {
        favorites: []
    }


    constructor() {
        window.addEventListener('hashchange', this.render.bind(this));
        //window.addEventListener('popstate', this.route2.bind(this));
        //window.addEventListener('beforeunload ',  this.route3.bind(this));
        //window.addEventListener('unload',  this.route4.bind(this));
        //window.addEventListener('load',  this.route2.bind(this));
        //window.addEventListener('DOMContentLoaded',  this.route6.bind(this));
        this.render();
    }

    render() {
        if (this.currentView) {
            this.currentView.destroy();
        }
        const View = this.routes.find(route => route.path === location.pathname).view;
        this.currentView = new View(this.appState);
        this.currentView.render();
        // history.pushState(null,'', 'new')
    }

    navigateTo(url) {
        console.log(url);

    }
}

new App();