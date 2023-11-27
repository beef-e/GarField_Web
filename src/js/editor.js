/*import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import Delimiter from '@editorjs/delimiter';
import NestedList from '@editorjs/nested-list';*/

const shortcuts = ['ALT+SHIFT+H', 'ALT+SHIFT+P', 'ALT+SHIFT+D', 'ALT+SHIFT+L'];

const editor = new EditorJS({
	tools: {
		header: {
			class: Header,
			config: {
				levels: [2, 3, 4],
				defaultLevel: 2,
			},
			inlineToolbar: false,
			shortcut: shortcuts[0],
		},
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
