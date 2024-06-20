const {app, BrowserWindow, ipcMain} = require('electron');

function createWindow() {
    let window = new BrowserWindow({
        width: 1000,
        minWidth: 400,
        height: 700,
        minHeight: 300,
        title: 'Electron window',
        frame: false,
        icon: __dirname + './logo.png',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    window.loadFile('./index.html');

    ipcMain.on('close-app', () => {
        app.quit();
    });
    ipcMain.on('max-app', () => {
        if(window.isMaximized()) {
            window.unmaximize();
        } else {
            window.maximize();
        }
    });
    ipcMain.on('mini-app', () => {
        window.minimize();
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});