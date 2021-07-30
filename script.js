function selectTheme(){
    var select = document.getElementById('themes');
    var value = select.options[select.selectedIndex].value;
    chrome.storage.sync.set({'currentTheme': value},  function() {
        console.log('Settings saved');
      })
      
}
function setCurrentTheme(currentTheme){
  const current = currentTheme.currentTheme
  var select = document.querySelector(`[value=${current}]`)
  select.setAttribute("selected", "selected")
}

function chbg(color) {
  document.getElementById('themes').style.border = color;
}   

chrome.storage.sync.get(['currentTheme'], setCurrentTheme)