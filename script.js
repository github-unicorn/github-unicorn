button = document.querySelector("#select");
button.addEventListener("click", selectTheme);
button.addEventListener("mouseout", onMouseOut);
button.addEventListener("mouseover", onMouseOver);
if (typeof browser === "undefined") {
    var browser = chrome;
}
function onMouseOut() {
	chbg("1px solid #3f3d56");
}

function onMouseOver() {
	chbg("1px solid #ff63a6");
}
(function () {
	let today = new Date();
	if (today.getMonth() == 11 && today.getDate() == 25)
		document.getElementById('unicorn_logo').src = browser.runtime.getURL('assets/christmas_icon.svg');
	if (today.getMonth() == 9 && today.getDate() == 31){
		document.getElementById('unicorn_logo').src = browser.runtime.getURL('assets/halloween_icon.svg');
		document.getElementsByTagName('body')[0].style.backgroundColor = "#0c0b0b";
		document.getElementsByTagName('body')[0].style.color = "#ff0000";

	}
})();

function dateToEpoch2(thedate) {
	return thedate.setHours(0, 0, 0, 0);
}

function selectTheme() {
	var select = document.getElementById("themes");
	var value = select.options[select.selectedIndex].value;

	chrome.storage.sync.set({ currentTheme: value }, function () {
		console.log("Settings saved.");
	});
	chrome.tabs.query({
		active: true,
		lastFocusedWindow: true
	}, function (tabs) {
		var tab = tabs[0];
		if (tab.url.includes("github.com")) {
			chrome.tabs.reload();
		}
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
