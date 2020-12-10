export class Loaded{
    public init(idElem: string):void {
        let test = document.getElementById('tabsEtudes');
        document.addEventListener('readystatechange', () => {
            console.log('1: ' + test);
        })

        switch (document.readyState) {
            case "loading":
                console.log('2: ' + test );
            // break;
            case "interactive":
                // Le DOM est construit, on peut y accéder.
                console.log('3: ' + test );
            // break;
            case "complete":
                // La page est pleinement chargée.
                console.log('4: ' + test );
            // break;
        }

        // alternative à load
        document.onreadystatechange = function () {
            if (document.readyState == "complete") {
                console.log('5: ' + test );
            }
        }

        // alternative à DOMContentLoaded
        document.onreadystatechange = function () {
            if (document.readyState == "interactive") {
                console.log('6: ' + test );
            }
        }

        window.addEventListener('load', (event) => {
            console.log('7 : ' + test );
        });

        document.addEventListener('readystatechange', (event) => {
            console.log('8: ' + test );
        });

        document.addEventListener('DOMContentLoaded', (event) => {
            console.log('9: ' + test );
        });

    }
}
