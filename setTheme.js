chrome.storage.sync.get(['currentTheme'], aplyingTheme);

function aplyingTheme(currentTheme) {
    fetch(chrome.extension.getURL('./themes.json'))
        .then((resp) => resp.json())
        .then(function (jsonData) {
            if (jsonData[currentTheme.currentTheme] != undefined) {
                const { lv1, lv2, lv3, lv4 } = jsonData[currentTheme.currentTheme];

                const sTheme = { lv1, lv2, lv3, lv4 };

                setProperties(sTheme);
            } else {
                const { lv1, lv2, lv3, lv4 } = jsonData['Pink'];

                const sTheme = { lv1, lv2, lv3, lv4 };
                setProperties(sTheme);
            }
        });
}

function setProperties(theme) {
    const page = document.querySelector(':root');

    page.style.setProperty('--color-calendar-graph-day-L1-bg', theme.lv1);
    page.style.setProperty('--color-calendar-graph-day-L2-bg', theme.lv2);
    page.style.setProperty('--color-calendar-graph-day-L3-bg', theme.lv3);
    page.style.setProperty('--color-calendar-graph-day-L4-bg', theme.lv4);
}
