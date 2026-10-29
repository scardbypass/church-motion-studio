const {app,BrowserWindow,dialog,ipcMain}=require('electron');
const fs=require('node:fs/promises');
const path=require('node:path');
let win;
function dataFile(){return path.join(app.getPath('userData'),'recovery.cmsproj')}
function createWindow(){win=new BrowserWindow({width:1500,height:900,minWidth:1050,minHeight:680,backgroundColor:'#0d1020',webPreferences:{nodeIntegration:false,contextIsolation:true,sandbox:true,preload:path.join(__dirname,'preload.js')}});win.loadFile('index.html');}
app.whenReady().then(createWindow);
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
ipcMain.handle('open-text',async()=>{const r=await dialog.showOpenDialog(win,{properties:['openFile'],filters:[{name:'Text',extensions:['txt']}]});if(r.canceled)return null;return fs.readFile(r.filePaths[0],'utf8')});
ipcMain.handle('save-project',async(_e,data)=>{const r=await dialog.showSaveDialog(win,{defaultPath:'Lirik.cmsproj',filters:[{name:'SCARD Project',extensions:['cmsproj']}]});if(r.canceled)return false;await fs.writeFile(r.filePath,JSON.stringify(data,null,2),'utf8');return true});
ipcMain.handle('open-project',async()=>{const r=await dialog.showOpenDialog(win,{properties:['openFile'],filters:[{name:'SCARD Project',extensions:['cmsproj']}]});if(r.canceled)return null;const st=await fs.stat(r.filePaths[0]);if(st.size>10*1024*1024)throw Error('Proyek terlalu besar');return JSON.parse(await fs.readFile(r.filePaths[0],'utf8'))});
ipcMain.handle('autosave',async(_e,data)=>{await fs.mkdir(path.dirname(dataFile()),{recursive:true});const temp=dataFile()+'.tmp';await fs.writeFile(temp,JSON.stringify(data),'utf8');await fs.rename(temp,dataFile());return true});
ipcMain.handle('load-autosave',async()=>{try{return JSON.parse(await fs.readFile(dataFile(),'utf8'))}catch(e){if(e.code==='ENOENT')return null;throw e}});
