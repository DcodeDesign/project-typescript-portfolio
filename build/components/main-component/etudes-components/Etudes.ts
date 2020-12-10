import etudes from './etudes.html';
import './etudes.scss';
import {Displacer} from '../../../../library/Displacer'
import {Timeline} from "../../../../library/Timeline";
import {Loaded} from "../../../../library/Loaded";

export class Etudes {
    private _displacer: Displacer;
    public _timeline: Timeline;
    private _loaded: Loaded;

    constructor() {
        this._displacer = new Displacer();
        this._timeline = new Timeline();
        this._loaded = new Loaded();
    }

    public init(): void {
        this._displacer.jsonFile('etudes.json', etudes, "etudes");

        let searchId = document.getElementById('tabsEtudes');
        let intervalId = setInterval(() => {
            console.log('etudes');
            if(searchId !== null){
                this._timeline.init('tabsEtudes');
                clearInterval(intervalId);
            }
            searchId = document.getElementById('tabsEtudes');
        }, 500);
    }
}
