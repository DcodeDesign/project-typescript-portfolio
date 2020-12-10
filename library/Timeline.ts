export class Timeline {

    constructor() { }

    public init(idElem: string) {
        this.Timeline(idElem);
    }

    public Timeline(idElem: string): void {
        let tabs = document.getElementById(idElem);
        if(tabs !== null) {
            let sliderNav = tabs.getElementsByClassName('slider-nav')[0];
            let btnNav = sliderNav.getElementsByClassName('date-time');
            let slides = tabs.getElementsByClassName('slide');

            for (let i = 0; i < btnNav.length; i++) {
                btnNav[i].addEventListener('click', (e: any) => {
                    let btnActive = sliderNav.getElementsByClassName('active');
                    btnActive[0].classList.remove('active');
                    (e.target as Element).classList.add('active');
                    let slidesShow = tabs.getElementsByClassName('show');
                    slidesShow[0].classList.remove('show');
                    slides[i].classList.add('show');
                });
            }
        }
    }
}
