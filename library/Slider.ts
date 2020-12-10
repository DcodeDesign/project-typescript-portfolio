export class Slider {

    public init(idElem: string): void {
        this.slider(idElem);
    }

    public slider(idElem: string): void {
        let slider = document.getElementById(idElem);
        let btnNav = slider.getElementsByClassName("slide-nav-btn");
        let classActive = slider.getElementsByClassName('active')[0];

        this.navigation(btnNav, classActive);

        btnNav[0].addEventListener('click', (e) => { // left
            e.preventDefault()
            if(slider !== null) {
                let slideActive = slider.getElementsByClassName("active")[0];
                let previousNewElem = slideActive.previousElementSibling;

                if (previousNewElem !== null) {
                    slideActive.classList.remove('active');
                    previousNewElem.classList.add('active');
                    this.navigation(btnNav, previousNewElem);
                }
            }
        })

        btnNav[1].addEventListener('click', (e) => { // right
            e.preventDefault()
            if(slider !== null) {
                let slideActive = slider.getElementsByClassName("active")[0];
                let nextNewElem = slideActive.nextElementSibling;

                if(nextNewElem !== null) {
                    slideActive.classList.remove('active');
                    nextNewElem.classList.add('active');
                    this.navigation(btnNav, nextNewElem);
                }
            }

        })
    }

    private navigation(btnCollection: HTMLCollection, activeElem: Element): void {
        let next = activeElem.nextElementSibling;
        let previous = activeElem.previousElementSibling;
        activeElem.classList.remove('left');
        activeElem.classList.remove('right');
        if (previous !== null) {
            previous.classList.add('left');
            let title = previous.getElementsByTagName('h3')[0];
            if(title !== undefined) {
                btnCollection[0].innerHTML = title.innerText ;
            }
            (btnCollection[0] as HTMLAnchorElement).classList.remove('hide');
            (btnCollection[0] as HTMLAnchorElement).classList.add('show');
        } else {
            (btnCollection[0] as HTMLAnchorElement).classList.remove('show');
            (btnCollection[0] as HTMLAnchorElement).classList.add('hide');
        }

        if (next !== null) {
            next.classList.add('right');
            let title = next.getElementsByTagName('h3')[0];
            if(title !== undefined) {
                btnCollection[1].innerHTML = title.innerText;
            }
            (btnCollection[1] as HTMLAnchorElement).classList.remove('hide');
            (btnCollection[1] as HTMLAnchorElement).classList.add('show');
        } else {
            (btnCollection[1] as HTMLAnchorElement).classList.remove('show');
            (btnCollection[1] as HTMLAnchorElement).classList.add('hide');
        }
    }
}
