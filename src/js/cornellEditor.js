const shortcuts = ['ALT+SHIFT+H', 'ALT+SHIFT+P', 'ALT+SHIFT+D', 'ALT+SHIFT+L'];

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
