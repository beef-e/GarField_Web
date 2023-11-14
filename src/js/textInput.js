const textarea = document.querySelector('#textarea');
const visibleText = document.querySelector('#visibleText');

visibleText.addEventListener('click', function () {
	textarea.focus();
});

textarea.addEventListener('input', function (e) {
	let text = e.target.value;

	visibleText.innerHTML = text;
});
