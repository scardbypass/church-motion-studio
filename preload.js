const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('studio', {
  importLyrics: () => ipcRenderer.invoke('open-text'),
  saveProject: (data) => ipcRenderer.invoke('save-project', data),
  openProject: () => ipcRenderer.invoke('open-project')
});