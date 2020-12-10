import {Displacer} from "./Displacer";

export class Tabs {

    constructor() { }

    public init(idElem: string) {
        this.tabs(idElem);
    }

    public tabs(idElem: string): void {
        let tabs = document.getElementById(idElem);
        if(tabs !== null) {
            let tabsNav = tabs.getElementsByClassName('tabs-nav');
            let btnNav = tabsNav[0].getElementsByClassName('btn-tabs');

            let tabsContainer = tabs.getElementsByClassName('tabs-container');
            let tabsContent = tabsContainer[0].getElementsByClassName('tab-content');

            let tabsImages = tabs.getElementsByClassName('tabs-images');
            let images = tabsImages[0].getElementsByClassName('images');

            for (let i = 0; i < btnNav.length; i++) {
                btnNav[i].addEventListener('click', (e: any) => {
                    let btnActive = tabsNav[0].getElementsByClassName('active');
                    let tabShow = tabsContainer[0].getElementsByClassName('show');
                    let imageShow = tabsImages[0].getElementsByClassName('show');
                    btnActive[0].classList.remove('active');
                    tabShow[0].classList.remove('show');
                    imageShow[0].classList.remove('show');
                    (e.target as Element).classList.add('active');
                    tabsContent[i].classList.add('show');
                    images[i].classList.add('show');
                });
            }
        }
    }
}
