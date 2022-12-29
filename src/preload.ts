const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    sleep: () => ipcRenderer.invoke('sleep'),
    league: () => ipcRenderer.invoke('league'),
    youtube: () => ipcRenderer.invoke('youtube'),
    roblox: () => ipcRenderer.invoke('roblox'),
    minecraft: () => ipcRenderer.invoke('minecraft'),
    last: () => ipcRenderer.invoke('last'),
    play: () => ipcRenderer.invoke('play'),
    next: () => ipcRenderer.invoke('next'),
    volume: (volume: number) => ipcRenderer.invoke('volume', volume),
    minimize: () => ipcRenderer.invoke('minimize'),
    exit: () => ipcRenderer.invoke('exit'),
})