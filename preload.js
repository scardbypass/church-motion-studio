const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('studio',Object.freeze({
importLyrics:()=>ipcRenderer.invoke('open-text'),
importImage:()=>ipcRenderer.invoke('open-image'),
saveProject:p=>ipcRenderer.invoke('save-project',p),
openProject:()=>ipcRenderer.invoke('open-project'),
autosave:p=>ipcRenderer.invoke('autosave',p),
loadAutosave:()=>ipcRenderer.invoke('load-autosave')
}));