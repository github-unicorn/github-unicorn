chrome.storage.sync.get(['currentTheme'], aplyingTheme)

function aplyingTheme(currentTheme){

    fetch(chrome.extension.getURL('./themes.json'))
    .then((resp) => resp.json())
    .then(function (jsonData) {
        const { lv1, lv2, lv3, lv4 } = jsonData[currentTheme.currentTheme];
        const page = document.querySelector(':root');
        page.style.setProperty('--color-calendar-graph-day-L1-bg', lv1)
        page.style.setProperty('--color-calendar-graph-day-L2-bg', lv2)
        page.style.setProperty('--color-calendar-graph-day-L3-bg', lv3)
        page.style.setProperty('--color-calendar-graph-day-L4-bg', lv4)
    });
}