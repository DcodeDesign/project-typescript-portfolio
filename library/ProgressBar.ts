export class ProgressBar {

    public init() {
        window.requestAnimationFrame = (
            (window as any).requestAnimationFrame ||
            (window as any).mozRequestAnimationFrame ||
            (window as any).webkitRequestAnimationFrame ||
            (window as any).msRequestAnimationFrame
        );
        this.progress()
        window.requestAnimationFrame(() => {
            window.addEventListener("scroll", (e: Event) => {
                this.progress();
            });
        });
    }

    public progress() {
        let itemMyBar: any = document.getElementById("myBar");
        let scrollVertical: number = window.pageYOffset ;
        let bodyHeight: number = document.body.clientHeight;
        let scrollWidth: number = ((scrollVertical / (bodyHeight )) * 100);
        if( scrollWidth === 0){
            itemMyBar.style.width = 10 + "%";
        }else {
            itemMyBar.style.width = (scrollWidth + 10) + "%";
        }

    }
}
