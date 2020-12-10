export class ScrollSlider {
    private _i: number;
    private _start: number;
    private _end: number;
    private readonly _range: number;
    private _classElem: HTMLCollection;
    private _elemLength: number;
    private _lastScrollTop: number;
    private _direction: string;
    private _bgColor: HTMLElement
    private _scrollPosition: any;
    private readonly _elemArray: Array<any>;
    private _titleSection: HTMLElement;
    public _listTitleSection: Array<string>;
    public _x: number;
    public _btn: HTMLElement;

    constructor() {
        this._i = 1;
        this._start = 0;
        this._end = 0;
        this._range = 1000;
        this._elemLength = 0;
        this._lastScrollTop = 0;
        this._direction = 'bottom';
        this._scrollPosition = window.scrollY;
        this._elemArray = [];
        this._x = 0;
        this._btn = document.getElementById('btnScroll');
        // this._direction = this.scrollDirection()
    }

    public init(classElem: string): void {
        this._bgColor = document.getElementById('dephtColor');
        this._classElem = document.getElementsByClassName(classElem);
        this._elemLength = classElem.length;
        this._titleSection = document.getElementById('titleSection');
        this._listTitleSection = ["Home", "Experiences", "Etudes", "Compétences", "Contact"]
        for (let i = 0; i < this._elemLength; ++i) {
            this._start = i * this._range;
            this._end += this._range;
            this._elemArray[i] = [this._start, this._end];
        }
        document.body.style.height = (this._elemLength * this._range) + "px";
        window.requestAnimationFrame = (
            (window as any).requestAnimationFrame ||
            (window as any).mozRequestAnimationFrame ||
            (window as any).webkitRequestAnimationFrame ||
            (window as any).msRequestAnimationFrame
        );

        this.slider();
        window.addEventListener("scroll", () => {
            this._scrollPosition = window.scrollY;
            window.requestAnimationFrame(() => {
                this.slider();
            });
        });
        // this.btnScrollTo();
    }

    public slider(): void {
        for (let i = 0; i < this._elemArray.length; i++) {
            this._classElem[i].classList.remove('show');
            document.body.classList.remove('color-' + i);
            if (this._elemArray[i][0] <= this._scrollPosition && this._elemArray[i][1] >= this._scrollPosition) {
                this._titleSection.innerText = this._listTitleSection[i];
                document.body.classList.add('color-' + i);
                this._classElem[i].classList.add('show');
                let position:number;

                /*let intervalId = setInterval(() => {
                    console.log('btnScrollTo() slider');
                    if (this._btn !== null) {
                        if (this._direction === "bottom") {
                            this._btn.classList.remove('inverse');
                            position = 1;
                        } else if (this._direction === "top") {
                            this._btn.classList.add('inverse');
                            position = 0;
                        } else {
                            position = 1;
                        }
                        if (this._elemArray[i] === this._elemArray[0]) {
                            this._x = this._elemArray[0][1] + (this._range /2);
                            this._btn.classList.remove('inverse');
                        } else if (this._elemArray[i] === this._elemArray[this._elemArray.length - 1]) {
                            this._btn.classList.add('inverse');
                            this._x = this._elemArray[0][0];
                        } else {
                            if(position !== 0){
                                // this._btn.classList.add('inverse');
                                this._x = this._elemArray[i][position] + (this._range /2);
                            } else {
                                // this._btn.classList.remove('inverse');
                                this._x = this._elemArray[i][position] - (this._range /2);
                            }
                        }
                        clearInterval(intervalId);
                    }
                    this._btn = document.getElementById('btnScroll');
                }, 500);*/

                this.navigation(i);
            }
        }
    }

    public navigation(current: number): void {
        let nav = document.getElementById('navigation');
        let btn = nav.getElementsByClassName('btn');
        for (let i = 0; i < btn.length; i++) {
            btn[i].classList.remove('active')
            if (i === current) {
                btn[i].classList.add('active')
            }
        }
    }

    public btnScrollTo(): void {
        let intervalId = setInterval(() => {
            if (this._btn !== null) {
                this._btn.addEventListener('click', () => {
                    window.scroll({top: this._x, left: 0, behavior: 'smooth'});
                })
                clearInterval(intervalId);
            }
            this._btn = document.getElementById('btnScroll');
        }, 500);
    }

    private scrollDirection(): string {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > this._lastScrollTop) {
            this._lastScrollTop = st <= 0 ? 0 : st;
            return 'bottom';
        } else if (st < this._lastScrollTop) {
            this._lastScrollTop = st <= 0 ? 0 : st;
            return 'top';
        } else {
            return 'bottom';
        }
    }
}
