"use strict";
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('api', {
    sleep: () => ipcRenderer.invoke('sleep'),
    league: () => ipcRenderer.invoke('league'),
    exit: () => ipcRenderer.invoke('exit'),
});
