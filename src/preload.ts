const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    sleep: () => ipcRenderer.invoke('sleep'),
    league: () => ipcRenderer.invoke('league'),
    youtube: () => ipcRenderer.invoke('youtube'),
    roblox: () => ipcRenderer.invoke('roblox'),
    exit: () => ipcRenderer.invoke('exit'),
})