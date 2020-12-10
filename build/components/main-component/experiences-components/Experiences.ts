import  experiences  from './experiences.html';
import './experiences.scss';
import { Displacer } from '../../../../library/Displacer'
import { Slider } from '../../../../library/Slider'

import {Exp01} from "./exp01-components/Exp01";
import {Exp02} from "./exp02-components/Exp02";
import {Exp03} from "./exp03-components/Exp03";
import {Exp04} from "./exp04-components/Exp04";

export class Experiences {
    private _displacer: Displacer;
    private _exp01: Exp01;
    private _exp02: Exp02;
    private _exp03: Exp03;
    private _exp04: Exp04;
    private _slider: Slider;

    constructor() {
        this._displacer = new Displacer();
        this._exp01 = new Exp01();
        this._exp02 = new Exp02();
        this._exp03 = new Exp03();
        this._exp04 = new Exp04();
        this._slider = new Slider();
    }
    public init(): void {
        document.getElementById('experiences').innerHTML = experiences;
        // this._displacer.jsonFile('./experiences.json', experiences, "experiences");
        this._exp01.init();
        this._exp02.init();
        this._exp03.init();
        this._exp04.init();

        let searchId = document.getElementById('slider');
        let intervalId = setInterval(() => {
            console.log('Experiences');
            if(searchId !== null){
                this._slider.init('slider');
                clearInterval(intervalId);
            }
            searchId = document.getElementById('slider');
        }, 500);
    }
}
