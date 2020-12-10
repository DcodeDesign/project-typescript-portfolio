import './main.scss';
import { Main } from "./components/main-component/Main";
import {Navigation} from "./components/navigation-component/Navigation";
import {Experiences} from "./components/main-component/experiences-components/Experiences";

export class Loader {
    private _main: Main;
    private _navigation: Navigation;
    private _experiences: Experiences;

    constructor() {
        this._main= new Main();
        this._navigation = new Navigation();
        this._experiences = new Experiences();
    }

    public init(): void {
        window.onbeforeunload = function () {
            // window.scrollTo(0, 0);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
        this._navigation.init();
        this._main.init('stage');

        /* document.addEventListener("load", () => {
        }); */
    }
}
