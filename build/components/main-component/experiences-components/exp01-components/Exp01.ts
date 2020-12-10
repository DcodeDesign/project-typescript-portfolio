import  etudes  from './exp01.html';
import './exp01.scss';
import { Displacer } from '../../../../../library/Displacer'

export class Exp01 {
    private _displacer: Displacer;

    constructor() {
        this._displacer = new Displacer()
    }

    public init(): void {
        this._displacer.jsonFile('exp01.json', etudes, "exp01");
    }
}
