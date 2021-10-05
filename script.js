button = document.querySelector("#select");
button.addEventListener("click", selectTheme);
button.addEventListener("mouseout", onMouseOut);
button.addEventListener("mouseover", onMouseOver);

function onMouseOut() {
	chbg("1px solid #3f3d56");
}

function onMouseOver() {
	chbg("1px solid #ff63a6");
}

function selectTheme() {
	var select = document.getElementById("themes");
	var value = select.options[select.selectedIndex].value;

	chrome.storage.sync.set({ currentTheme: value }, function () {
		console.log("Settings saved");
	});
}

function setCurrentTheme(currentTheme) {
	const current = currentTheme.currentTheme;
	var select = document.querySelector(`[value=${current}]`);

	if (current != undefined) select.setAttribute("selected", "selected");
}

function chbg(color) {
	document.getElementById("themes").style.border = color;
}

chrome.storage.sync.get(["currentTheme"], setCurrentTheme);
