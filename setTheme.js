chrome.storage.sync.get(["currentTheme"], aplyingTheme);

function aplyingTheme(currentTheme) {
	fetch(chrome.extension.getURL("./themes.json"))
		.then((resp) => resp.json())
		.then(function (jsonData) {
			if (jsonData[currentTheme.currentTheme] != undefined) {
				const { lv1, lv2, lv3, lv4 } =
					jsonData[currentTheme.currentTheme];

				const sTheme = { lv1, lv2, lv3, lv4 };

				setProperties(sTheme);
			} else {
				const { lv1, lv2, lv3, lv4 } = jsonData["Pink"];

				const sTheme = { lv1, lv2, lv3, lv4 };
				setProperties(sTheme);
			}
		});
}

function setProperties(theme) {
	const page = document.querySelector(":root");
	const jsHgBlob = document.getElementsByClassName("js-highlight-blob");
	const acOvAxis = document.getElementsByClassName("activity-overview-axis");
	const acOvPoint = document.getElementsByClassName(
		"activity-overview-point"
	);

	if (jsHgBlob[0]) {
		for (let i = 0, x = jsHgBlob.length; i < x; i++) {
			jsHgBlob[i].style.fill = theme.lv1;
			jsHgBlob[i].style.stroke = theme.lv1;
		}
	}

	if (acOvAxis[0]) {
		for (let j = 0, y = acOvAxis.length; j < y; j++) {
			acOvAxis[j].style.stroke = theme.lv2;
		}
	}

	if (acOvPoint[0]) {
		for (let k = 0, z = acOvPoint.length; k < z; k++) {
			acOvPoint[k].style.fill = theme.lv3;
			acOvPoint[k].style.stroke = theme.lv4;
		}
	}

	page.style.setProperty("--color-calendar-graph-day-L1-bg", theme.lv1);
	page.style.setProperty("--color-calendar-graph-day-L2-bg", theme.lv2);
	page.style.setProperty("--color-calendar-graph-day-L3-bg", theme.lv3);
	page.style.setProperty("--color-calendar-graph-day-L4-bg", theme.lv4);
}
