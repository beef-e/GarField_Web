/*import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import Delimiter from '@editorjs/delimiter';
import NestedList from '@editorjs/nested-list';*/

const editor = new EditorJS({
	tools: {
		header: {
			class: Header,
			levels: [2, 3, 4],
			defaultLevel: 2,
			inlineToolbar: false,
		},
		paragraph: {
			class: Paragraph,
			inlineToolbar: false,
		},
		delimiter: {
			class: Delimiter,
		},
		list: {
			class: NestedList,
			inlineToolbar: false,
		},
	},
});
