import  etudes  from './exp02.html';
import './exp02.scss';
import { Displacer } from '../../../../../library/Displacer'

export class Exp02 {
    private _displacer: Displacer;

    constructor() {
        this._displacer = new Displacer()
    }

    public init(): void {
        this._displacer.jsonFile('exp02.json', etudes, "exp02");
    }
}
