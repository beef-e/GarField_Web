const { app, BrowserWindow, Menu } = require('electron');

try {
	require('electron-reloader')(module);
} catch {}

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
	});

	win.loadFile('index.html');
};

app.whenReady().then(() => {
	createWindow();

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
		submenu: [{ role: 'quit', accelerator: 'CmdOrCtrl+w' }],
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
		submenu: [{ role: 'reload' }, { role: 'togglefullscreen' }],
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
