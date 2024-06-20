'use strict';

const {ipcRenderer} = require('electron');

import App from "./script/App.js";
import Setting from "./script/Setting.js";
import ThemeApp from "./script/ThemeApp.js";

export let setting = new Setting('src/setting.json');

document.body.onload = () => {
    new App();
    let themeApp = new ThemeApp();

    document.getElementById('btnHeaderMin').addEventListener('click', () => {
        ipcRenderer.send('mini-app');
    });

    document.getElementById('btnHeaderMax').addEventListener('click', () => {
        ipcRenderer.send('max-app');
        themeApp.checkFullScreen();
    });

    document.getElementById('btnHeaderClose').addEventListener('click', () => {
        ipcRenderer.send('close-app');
    });
}