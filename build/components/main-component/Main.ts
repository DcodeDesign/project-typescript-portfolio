import  template  from './main.html';
import './main.scss';
import { Home } from "./home-component/Home";
import { Experiences } from "./experiences-components/Experiences";
import { Etudes } from "./etudes-components/Etudes";
import { Competences } from "./competences-components/Competences";
import { Contact } from "./contact-components/Contact";
import { ScrollSlider } from '../../../library/ScrollSlider'

export class Main {
    private _home: Home;
    private _experiences : Experiences;
    private _etudes: Etudes;
    private _compentences: Competences;
    private _contact: Contact;
    public _scrollSlider: any;

    constructor() {
        this._home = new Home();
        this._experiences = new Experiences();
        this._etudes = new Etudes();
        this._compentences = new Competences();
        this._contact = new Contact();
        this._scrollSlider = new ScrollSlider()
    }

    public init(classElem: string): void {
        document.getElementById("content").innerHTML = template;
        this._home.init();
        this._experiences.init();
        this._etudes.init();
        this._compentences.init();
        this._contact.init();
        this._scrollSlider.init(classElem);
    }
}
