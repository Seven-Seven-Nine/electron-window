'use strict';

export default class App {
    constructor() {
        this.init();
    }

    init() {
        this.createStructure();
    }

    createStructure() {
        const body = document.body;
        body.innerHTML = `
        <header>
            <div id="icoHeader" class="icoHeader"></div>
            <div id="titleHeader" class="titleHeader"><label>Electron window development</label></div>
            <div id="btnHeaderMin" class="btnHeader"></div>
            <div id="btnHeaderMax" class="btnHeader"></div>
            <div id="btnHeaderClose" class="btnHeaderClose"></div>
        </header>
        <main id="main"></main>
        `;
    }
}