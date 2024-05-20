import path from 'path'
import fs from 'fs';
import { app, dialog, ipcMain } from 'electron';  // ,ipcMain
import serve from 'electron-serve'
import { createWindow } from './helpers'
// const { Menu } = require('electron');

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

; (async () => {
  await app.whenReady()

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: true,
    },
  })

  if (isProd) {
    await mainWindow.loadURL('app://./home')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/home`)
    mainWindow.webContents.openDevTools()
  }
// const findMp3Files = (dir) => {
//   let mp3Files = [];

//   const files = fs.readdirSync(dir);

//   files.forEach((file) => {
//     const filePath = path.join(dir, file);
//     const stat = fs.statSync(filePath);

//     if (stat.isDirectory()) {
//       mp3Files = mp3Files.concat(findMp3Files(filePath));
//     } else if (path.extname(file) === '.mp3') {
//       mp3Files.push(filePath);
//     }
//   });

//   return mp3Files;
// };

// ipcMain.on('scan-mp3-files', (event) => {
//   const mp3Files = findMp3Files(['//home//admin1//Music', '//home//admin1//Downloads']);
//   event.reply('mp3-files-found', mp3Files);
// });
}
)()


app.on('window-all-closed', () => {
  app.quit()
})

