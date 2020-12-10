import  contact  from './contact.html';
import './contact.scss';
import { Displacer } from '../../../../library/Displacer'

export class Contact {
    private _displacer: Displacer;

    constructor() {
        this._displacer = new Displacer()
    }
    public init(): void {
        this._displacer.jsonFile('contact.json', contact, "contact");
    }
}
