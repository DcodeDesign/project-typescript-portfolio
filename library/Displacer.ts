export class Displacer {

    public displacer(tpl: any, data: any): any {
        let re: any = /\$\(([^\)]+)?\)/g, match;
        let json = JSON.parse(data);
        while (match = re.exec(tpl)) {
            tpl = tpl.replace(match[0], json[match[1]])
            re.lastIndex = 0;
        }
        return tpl;
    }

    public readJsonFile(file: any, callback: any) {
        let rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4 && rawFile.status == 200) {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }

    public jsonFile(fileJon: any, tpl: string, id: string): void {
        this.readJsonFile(fileJon,  (text: any) => {
            document.getElementById(id).innerHTML = this.displacer(tpl,text);
        });
    }
}
