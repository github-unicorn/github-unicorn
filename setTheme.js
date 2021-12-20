chrome.storage.sync.get(["currentTheme"], applyingTheme);

function applyingTheme(currentTheme) {
	let sTheme = {};

	fetch(chrome.extension.getURL("./themes.json"))
		.then((resp) => resp.json())
		.then(function (jsonData) {
			if (jsonData[currentTheme.currentTheme] != undefined) {
				sTheme = { lv1, lv2, lv3, lv4 } =
					jsonData[currentTheme.currentTheme];
			} else {
				sTheme = { lv1, lv2, lv3, lv4 } = jsonData["Dark_Unicorn"];
			}
			setProperties(sTheme);
		});
}

function setProperties(theme) {
	const page = document.querySelector(":root");
	const jsHgBlob = document.getElementsByClassName("js-highlight-blob");
	const acOvAxis = document.getElementsByClassName("activity-overview-axis");
	const acOvPoint = document.getElementsByClassName("activity-overview-point");

	// apply colors without rewrite 'Languages' bar
	const progressBar = document.querySelectorAll(".Progress-item:not(.color-bg-success-emphasis)");

	// apply colors in github contribution calendar graph
	if (jsHgBlob[0]) {
		for (let i = 0, x = jsHgBlob.length; i < x; i++) {
			jsHgBlob[i].style.fill = theme.lv1;
			jsHgBlob[i].style.stroke = theme.lv1;
		}
	}

	// apply colors in activity overview axis
	if (acOvAxis[0]) {
		for (let j = 0, y = acOvAxis.length; j < y; j++) {
			acOvAxis[j].style.stroke = theme.lv2;
		}
	}

	// apply colors in activity overview points
	if (acOvPoint[0]) {
		for (let k = 0, z = acOvPoint.length; k < z; k++) {
			acOvPoint[k].style.fill = theme.lv1;
			acOvPoint[k].style.stroke = theme.lv2;
		}
	}

	// apply colors in progress bars
	if (progressBar[0]) {
		for (let l = 0, w = progressBar.length; l < w; l++) {
			let percentage = parseInt(progressBar[l].style.width.replace("%", ""));

			if (percentage > 0 && percentage <= 25) {
				progressBar[l].style.backgroundColor = theme.lv1;
			}

			if (percentage > 25 && percentage <= 50) {
				progressBar[l].style.backgroundColor = theme.lv2;
			}

			if (percentage > 50 && percentage <= 75) {
				progressBar[l].style.backgroundColor = theme.lv3;
			}

			if (percentage > 75 && percentage <= 100) {
				progressBar[l].style.backgroundColor = theme.lv4;
			}
		}
	}

	// apply colors when isn't holydays
	page.style.setProperty("--color-calendar-graph-day-L1-bg", theme.lv1);
	page.style.setProperty("--color-calendar-graph-day-L2-bg", theme.lv2);
	page.style.setProperty("--color-calendar-graph-day-L3-bg", theme.lv3);
	page.style.setProperty("--color-calendar-graph-day-L4-bg", theme.lv4);

	// apply colors when are Halloween
	page.style.setProperty("--color-calendar-halloween-graph-day-L1-bg", theme.lv1);
	page.style.setProperty("--color-calendar-halloween-graph-day-L2-bg", theme.lv2);
	page.style.setProperty("--color-calendar-halloween-graph-day-L3-bg", theme.lv3);
	page.style.setProperty("--color-calendar-halloween-graph-day-L4-bg", theme.lv4);
}

(() => {
	chrome.storage.sync.get(["currentTheme"], applyingTheme);

	const container = document.getElementById("js-pjax-container");
	if (container) {
		const listener = new MutationObserver(() => {
			const graph = document.getElementsByClassName(
				"js-yearly-contributions"
			)[0];

			if (graph) {
				chrome.storage.sync.get(["currentTheme"], applyingTheme);
			}
		});

		listener.observe(container, { subtree: true, childList: true });
	}
})();
