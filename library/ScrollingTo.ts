export class ScrollingTo {
    public init() {
        this.actionOnBtn();
    }

    public actionOnBtn():void {
        let btnScrolling: HTMLCollection = document.getElementsByClassName('scrollingBtn');
        for (let i = 0;i < btnScrolling.length; i++ ){

            let time = Number(600);
            (btnScrolling[i] as HTMLElement).addEventListener('click', () => {
                let elemScrollTo =  (btnScrolling[i] as HTMLElement).getAttribute('data-scrolling').valueOf();
                let pos =Number(document.getElementById(elemScrollTo).offsetTop);
                this.scrollToSmoothly(pos, time)
            });
        }
    }

    public scrollToSmoothly(pos: any, time: any){
        if(typeof pos!== "number"){
            pos = parseFloat(pos);
        }
        if(isNaN(pos)){
            console.warn("Position must be a number or a numeric String.");
            throw "Position must be a number";
        }
        if(pos<0||time<0){
            return;
        }
        let currentPos = window.scrollY || window.screenTop;
        let start: any = null;
        time = time || 500;
        window.requestAnimationFrame(function step(currentTime){
            start = !start? currentTime: start;
            if(currentPos<pos){
                let progress = currentTime - start;
                window.scrollTo(0, ((pos-currentPos)*progress/time)+currentPos);
                if(progress < time){
                    window.requestAnimationFrame(step);
                } else {
                    window.scrollTo(0, pos);
                }
            } else {
                let progress = currentTime - start;
                window.scrollTo(0, currentPos-((currentPos-pos)*progress/time));
                if(progress < time){
                    window.requestAnimationFrame(step);
                } else {
                    window.scrollTo(0, pos);
                }
            }
        });
    }
}
