const { app, BrowserWindow, Menu } = require('electron');
let modeVar = true;

const switchModeTrigger = () => {
	console.log('switch mode');
	console.log(modeVar);
	modeVar = !modeVar;
	/*BrowserWindow.getAllWindows().forEach((win) => {
		if (mode) win.loadFile('index.html');
		else win.loadFile('cornell.html');
	});*/
	createWindow(modeVar);
	chiudiUltimaFinestra();
	//app.relaunch();
	//app.quit();
};

try {
	require('electron-reloader')(module);
} catch {}

const createWindow = (modeVar) => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
	});

	if (modeVar == true || modeVar == undefined) {
		win.loadFile('index.html');
	} else {
		win.loadFile('cornell.html');
	}

	//win.loadFile('index.html');
};

app.whenReady().then(() => {
	createWindow(modeVar);

	app.on('window-all-closed', () => {
		if (process.platform !== 'darwin') app.quit();
	});

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

const menuTemplate = [
	{
		label: 'File',
		submenu: [
			{ role: 'quit', accelerator: 'CmdOrCtrl+w' },
			{
				label: 'Switch mode',
				click: () => {
					switchModeTrigger();
				},
				accelerator: 'CmdOrCtrl+Shift+m',
			},
		],
	},

	{
		label: 'Edit',
		submenu: [
			{ role: 'undo', accelerator: 'CmdOrCtrl+z' },
			{ role: 'redo', accelerator: 'CmdOrCtrl+y' },
			{ type: 'separator' },
			{ role: 'cut' },
			{ role: 'copy' },
			{ role: 'paste' },
			{ type: 'separator' },
			{ label: 'Save', accelerator: 'CmdOrCtrl+s' },
		],
	},

	{
		label: 'View',
		submenu: [{ role: 'reload' }, { role: 'togglefullscreen' }, { role: 'toggleDevTools' }],
	},

	{
		label: 'Help',
		submenu: [
			{
				label: 'Learn More',
				click: () => {
					const { shell } = require('electron');
					shell.openExternal('https://github.com/beef-e/GarField_Web');
				},
			},
		],
	},
];

const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);

const chiudiUltimaFinestra = () => {
	for (let i = 0; i < BrowserWindow.getAllWindows().length; i++) {
		if (i == BrowserWindow.getAllWindows().length - 1) {
			BrowserWindow.getAllWindows()[i].close();
		}
	}
};
