import  etudes  from './exp03.html';
import './exp03.scss';
import { Displacer } from '../../../../../library/Displacer'

export class Exp03 {
    private _displacer: Displacer;

    constructor() {
        this._displacer = new Displacer()
    }

    public init(): void {
        this._displacer.jsonFile('exp03.json', etudes, "exp03");
    }
}
