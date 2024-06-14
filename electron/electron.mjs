// Modules to control application life and create native browser window
import { app, BrowserWindow, Menu } from "electron";
import path from "path";
const isDev = process.env.IS_DEV === "true";

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    minWidth: 1000,
    minHeight: 700,
    backgroundColor: "#ebebeb",
    webPreferences: {
      webSecurity: false,
    },
    icon: "./public/owl-logo.ico",
  });

  // and load the index.html of the app.
  if (isDev) {
    mainWindow.loadURL("http://localhost:7000");
  } else {
    mainWindow.loadURL("http://185.247.185.176:80/");
  }

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.commandLine.appendSwitch("disable-features", "OutOfBlinkCors");
app.commandLine.appendSwitch("disable-site-isolation-trials");
app.whenReady().then(() => {
  createWindow();

  if (!isDev) Menu.setApplicationMenu(null);

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
