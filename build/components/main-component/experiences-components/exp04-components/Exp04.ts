import  etudes  from './exp04.html';
import './exp04.scss';
import { Displacer } from '../../../../../library/Displacer'

export class Exp04 {
    private _displacer: Displacer;

    constructor() {
        this._displacer = new Displacer()
    }

    public init(): void {
        this._displacer.jsonFile('exp04.json', etudes, "exp04");
    }
}
