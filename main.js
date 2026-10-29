const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const fs = require('node:fs/promises');
const path = require('node:path');
function window() {
  const win = new BrowserWindow({ width: 1440, height: 900, minWidth: 980, minHeight: 640, backgroundColor: '#0c1020', webPreferences: { nodeIntegration: false, contextIsolation: true, preload: path.join(__dirname, 'preload.js') } });
  win.loadFile('index.html');
}
app.whenReady().then(window);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
ipcMain.handle('open-text', async () => {
  const r = await dialog.showOpenDialog({ properties: ['openFile'], filters: [{ name: 'Lyrics', extensions: ['txt'] }] });
  if (r.canceled) return null;
  return fs.readFile(r.filePaths[0], 'utf8');
});
ipcMain.handle('save-project', async (_event, data) => {
  const r = await dialog.showSaveDialog({ defaultPath: 'ChurchMotion.cmsproj', filters: [{ name: 'Church Motion Project', extensions: ['cmsproj'] }] });
  if (r.canceled) return false;
  await fs.writeFile(r.filePath, JSON.stringify(data, null, 2), 'utf8');
  return true;
});
ipcMain.handle('open-project', async () => {
  const r = await dialog.showOpenDialog({ properties: ['openFile'], filters: [{ name: 'Church Motion Project', extensions: ['cmsproj'] }] });
  if (r.canceled) return null;
  return JSON.parse(await fs.readFile(r.filePaths[0], 'utf8'));
});
