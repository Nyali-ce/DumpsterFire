const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    sleep: () => ipcRenderer.invoke('sleep'),
    league: () => ipcRenderer.invoke('league'),
    youtube: () => ipcRenderer.invoke('youtube'),
    exit: () => ipcRenderer.invoke('exit'),
})