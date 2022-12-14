"use strict";
const { exec } = require('child_process');
const path = require('path');
const { app, BrowserWindow, Menu, ipcMain } = require('electron');
let progressInterval;
const createWindow = () => {
    const winMenu = new Menu.buildFromTemplate([
        {
            label: 'View',
            submenu: [
                {
                    label: 'Reload',
                    accelerator: 'F5',
                    click: () => {
                        win.reload();
                    },
                }
            ]
        },
        {
            label: 'dev',
            submenu: [
                {
                    label: 'Toggle DevTools',
                    accelerator: 'F12',
                    click: () => {
                        win.webContents.toggleDevTools();
                    }
                },
            ]
        }
    ]);
    const win = new BrowserWindow({
        icon: path.join(__dirname, '../assets/icons/icon.ico'),
        titleBarOverlay: false,
        titleBarStyle: 'hidden',
        autoHideMenuBar: true,
        width: 1280,
        height: 720,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });
    win.setMenu(winMenu);
    ipcMain.handle('sleep', () => {
        exec("powershell (Add-Type '[DllImport(\\\"user32.dll\\\")]^public static extern int SendMessage(int hWnd, int hMsg, int wParam, int lParam);' -Name a -Pas)::SendMessage(-1, 0x0112, 0xF170, 2)");
    });
    ipcMain.handle('league', () => {
        exec("\"A:/Games/Riot Games/Riot Client/RiotClientServices.exe\" --launch-product=league_of_legends --launch-patchline=live");
    });
    ipcMain.handle('exit', () => {
        app.quit();
    });
    win.flashFrame(true);
    win.on('focus', () => {
        win.flashFrame(false);
    });
    win.loadFile('index.html');
    win.setThumbarButtons([]);
    const INCREMENT = 0.05;
    let c = 0;
    let up = true;
    progressInterval = setInterval(() => {
        if (up && c + INCREMENT <= 1) {
            c += INCREMENT;
        }
        else if (up && c + INCREMENT > 1) {
            up = false;
            c -= INCREMENT;
        }
        else if (!up && c - INCREMENT >= 0) {
            c -= INCREMENT;
        }
        else if (!up && c - INCREMENT < 0) {
            up = true;
            c += INCREMENT;
        }
        win.setProgressBar(c > 0 ? c : 0.01);
    }, 50);
};
app.on('before-quit', () => {
    clearInterval(progressInterval);
});
app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});