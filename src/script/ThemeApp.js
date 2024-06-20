'use strict';

import { setting } from "../render.js";
import LoadSvg from "./LoadSvg.js";

export default class ThemeApp {
    theme = '';
    btnHeaderMaxDoubleIcon = false;

    constructor() {
        this.init();
    }

    init() {
        this.getTheme();
        this.applyTheme();
        this.applyFrame();
    }

    getTheme() {
        this.theme = setting.getParameterSettings('themeApp');
    }

    applyTheme() {
        let link = document.getElementById('mainStyle');
        let settingTheme = setting.getSettingTheme(this.theme);
        link.href = `theme/${this.theme}/${settingTheme.srcStyle}`;
    }

    applyFrame() {
        let svgLoader = new LoadSvg();
        let themeApp = setting.getParameterSettings('themeApp');
        svgLoader.loadSvg('icoHeader', `theme/${themeApp}/image/logo.svg`);
        svgLoader.loadSvg('btnHeaderMin', `theme/${themeApp}/image/btnMin.svg`);
        if(this.btnHeaderMaxDoubleIcon === false) {
            svgLoader.loadSvg('btnHeaderMax', `theme/${themeApp}/image/btnMax.svg`);
        } else if(this.btnHeaderMaxDoubleIcon === true) {
            svgLoader.loadSvg('btnHeaderMax', `theme/${themeApp}/image/btnMaxDouble.svg`);
        }
        svgLoader.loadSvg('btnHeaderClose', `theme/${themeApp}/image/btnClose.svg`);
    }

    resetFrame() {
        let btnHeaderMin = document.getElementById('btnHeaderMin').textContent = "";
        let btnHeaderMax = document.getElementById('btnHeaderMax').textContent = "";
        let btnHeaderClose = document.getElementById('btnHeaderClose').textContent = "";
        this.applyFrame();
    }

    checkFullScreen() {
        if(this.btnHeaderMaxDoubleIcon == false) {
            this.btnHeaderMaxDoubleIcon = true;
            this.resetFrame();
        } else {
            this.btnHeaderMaxDoubleIcon = false;
            this.resetFrame();
        }
    }
}