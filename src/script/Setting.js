'use strict';

/*
    В src нужно указать путь до setting.json.

    ! Реализовать обновление jsonSetting, если setting.json был каким-либо образом изменён.
*/

const fs = require('fs');

export default class Setting {
    constructor(src) {
        this.src = src;
    }
    
    jsonSetting = '';

    readJsonFile(src = '') {
        try {
            const data = fs.readFileSync(src, 'utf-8');
            const jsonData = JSON.parse(data);
            return jsonData;
        } catch (error) {
            console.error(`Ошибка при чтении файла: ${error}`);
            throw error;
        }       
    }

    getParameterSettings(parameter = '') {
        let settingData = this.readJsonFile(this.src);
        return settingData.themeApp;
    }

    getSettingTheme(jsonSrc) {
        let settingTheme = this.readJsonFile(`src/theme/${jsonSrc}/setting-theme.json`);
        return settingTheme;
    }
}