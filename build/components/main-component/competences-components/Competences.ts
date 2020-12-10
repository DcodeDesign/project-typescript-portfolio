import competences from './competences.html';
import './competences.scss';
import { Displacer } from '../../../../library/Displacer'
import { Tabs } from "../../../../library/Tabs";
import { Loaded } from "../../../../library/Loaded";

export class Competences {
    private _displacer: Displacer;
    public _tabs: Tabs;
    private _loaded: Loaded;

    constructor() {
        this._displacer = new Displacer();
        this._tabs =  new Tabs();
        this._loaded = new Loaded();
    }

    public init(): void {
        this._displacer.jsonFile('competences.json', competences, "competences");
        let searchId = document.getElementById('tabsCompetences');
        let intervalId = setInterval(() => {
            console.log('competences');
            if(searchId !== null){
                this._tabs.init('tabsCompetences');
                clearInterval(intervalId);
            }
            searchId = document.getElementById('tabsCompetences');
        }, 500);
    }
}
