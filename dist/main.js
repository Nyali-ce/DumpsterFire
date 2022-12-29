"use strict";
const { exec } = require('child_process');
const path = require('path');
const { app, BrowserWindow, Menu, ipcMain, Tray } = require('electron');
const { handler } = require('./handler.js');
if (require('electron-squirrel-startup'))
    app.quit();
let progressInterval;
const createWindow = () => {
    const tray = new Tray(path.join(__dirname, '../assets/icons/icon.ico'));
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Exit',
            click: () => {
                app.quit();
            }
        }
    ]);
    tray.setToolTip('Electron App');
    tray.setContextMenu(contextMenu);
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
    handler(ipcMain, win, app, exec);
    win.flashFrame(true);
    win.on('focus', () => {
        win.flashFrame(false);
    });
    win.loadFile('index.html');
    win.setThumbarButtons([
        {
            program: process.execPath,
            icon: path.join(__dirname, '../assets/icons/icon.ico'),
            tooltip: 'Sleep',
            click: () => {
                exec("powershell (Add-Type '[DllImport(\\\"user32.dll\\\")]^public static extern int SendMessage(int hWnd, int hMsg, int wParam, int lParam);' -Name a -Pas)::SendMessage(-1, 0x0112, 0xF170, 2)");
            }
        },
    ]);
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
    app.commandLine.appendSwitch('force-high-performance-gpu');
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
