const shortcuts = ['ALT+SHIFT+H', 'ALT+SHIFT+P', 'ALT+SHIFT+D', 'ALT+SHIFT+L'];
let activeEditor = 'left';
const switchShortcut = 'p';

const editor = new EditorJS({
	holder: 'editorjs',
	tools: {
		paragraph: {
			class: Paragraph,
			inlineToolbar: false,
			shortcut: shortcuts[1],
		},
		delimiter: {
			class: Delimiter,
			shortcut: shortcuts[2],
		},
		list: {
			class: NestedList,
			inlineToolbar: false,
			shortcut: shortcuts[3],
		},
	},
});

const leftEditor = new EditorJS({
	holder: 'titles',
	defaultBlock: 'header',
	tools: {
		header: {
			class: Header,
			config: {
				levels: [3],
				defaultLevel: 3,
			},
			inlineToolbar: false,
		},
	},
});

document.addEventListener('keydown', function (event) {
	const key = switchShortcut;
	console.log(key);
	if (event.ctrlKey && event.altKey && event.key === key) {
		console.log('Switching editors!');
		if (activeEditor === 'left') {
			editor.focus(true);
			activeEditor = 'right';
		} else {
			leftEditor.focus(true);
			activeEditor = 'left';
		}
	}
});
