import  template  from './home.html';
import './home.scss';
import { Displacer } from '../../../../library/Displacer'

export class Home {
    private _displacer: Displacer;

    constructor() {
        this._displacer = new Displacer()
    }
    public init(): void {
        this._displacer.jsonFile('home.json', template, "home");
    }
}
