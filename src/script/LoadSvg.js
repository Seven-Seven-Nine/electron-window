'use strict';

/* 
    Два варианта: сразу же с помощью конструктора, или через метод loadSvg(), если требуется загрузить больше файлов, чем 1...
    В поле src вставлять текст по типу: image/logo.svg.
*/

export default class LoadSvg {
    constructor(idElement = '', src = '') {
        this.idElement = idElement;
        this.src = src;
        this.init();
    }

    init() {
        if(this.idElement !== '' && this.src !== '') {
            this.loadSvg(this.idElement, this.src);
        }
    }

    loadSvg(idElement = '', src = '') {
        fetch(src).then(response => {
            if(!response.ok) {
                throw new Error('Ошибка загрузки svg файла.');
            }
            return response.text();
        }).then(dataSvg => {
            let element = document.getElementById(idElement);
            element.innerHTML = dataSvg;
        }).catch(error => {
            console.error(`Ошибка Fetch API при загрузке SVG: ${error}`);
        });
    }
}