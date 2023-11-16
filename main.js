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
		submenu: [{ role: 'quit' }],
	},

	{
		label: 'Edit',
		submenu: [
			{ role: 'undo' },
			{ role: 'redo' },
			{ type: 'separator' },
			{ role: 'cut' },
			{ role: 'copy' },
			{ role: 'paste' },
			{ type: 'separator' },
			{ label: 'Save' },
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
			},
		],
	},
];

const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);
