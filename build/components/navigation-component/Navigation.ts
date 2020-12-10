import  navigation  from './navigation.html';
import './navigation.scss';
// @ts-ignore
import { Displacer } from '@library/Displacer';
// @ts-ignore
import { ScrollingTo } from '@library/ScrollingTo.ts';
// @ts-ignore
import { ProgressBar } from '@library/ProgressBar';

export class Navigation {
    private _displacer: Displacer;
    private _scrollingTo: ScrollingTo;
    private _progressBar: ProgressBar;

    constructor() {
        this._displacer = new Displacer()
        this._scrollingTo = new ScrollingTo();
        this._progressBar = new ProgressBar();
    }
    public init(): void {
        this._displacer.jsonFile('navigation.json', navigation, "navigation");
        this._scrollingTo.init();

        let searchId = document.getElementById('myBar');
        let intervalId = setInterval(() => {
            console.log('Navigation');
            if(searchId !== null){
                this._progressBar.init();
                clearInterval(intervalId);
            }
            searchId = document.getElementById('myBar');
        }, 500);
    }
}
