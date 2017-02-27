const { app, BrowserWindow } = require( 'electron');
const path = require("path")
let mainWindow;

app.on('ready', () => {
  const index = path.join(__dirname,
  'index.html')

  mainWindow = new BrowserWindow ({});
  mainWindow.loadURL(`file://${index}`);

  mainWindow.webContents.on('will-navigate', (e, url) => {
    e.preventDefault();
    console.log(`Tried to navigate to: ${url}`);

  mainWindow.webContents.send('navigate', url);
  });
});
