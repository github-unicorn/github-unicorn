chrome.storage.sync.get(['currentTheme'], aplyingTheme)

function aplyingTheme(currentTheme){
    //default colors
    var lv1 = 'fill: #FF9CD4 !important;'
    var lv2 = 'fill: #F780C8 !important;'
    var lv3 = 'fill: #F059A5 !important;'
    var lv4 = 'fill: #E0218A !important;'
    if(currentTheme.currentTheme == 'Unicorn'){
        var lv1 = 'fill: #FF72C1 !important;'
        var lv2 = 'fill: #64F651 !important;'
        var lv3 = 'fill: #A05BFD !important;'
        var lv4 = 'fill: #15DBFF !important;'
    } else if(currentTheme.currentTheme == 'Light_Blue'){
        var lv1 = 'fill: #30BFBF !important;'
        var lv2 = 'fill: #26B0BF !important;'
        var lv3 = 'fill: #0C9ABA !important;'
        var lv4 = 'fill: #0689AE !important;'
    }else if(currentTheme.currentTheme == 'Pink'){
        var lv1 = 'fill: #FF9CD4 !important;'
        var lv2 = 'fill: #F780C8 !important;'
        var lv3 = 'fill: #F059A5 !important;'
        var lv4 = 'fill: #E0218A !important;'
    }else if(currentTheme.currentTheme == 'Dark_Blue'){
        var lv1 = 'fill: #679cd0 !important;'
        var lv2 = 'fill: #4183c4 !important;'
        var lv3 = 'fill: #31699f !important;'
        var lv4 = 'fill: #254f77 !important;'
    }
    const level4 = document.querySelectorAll("rect[data-level='4']")
        for( element of level4)
            element.setAttribute("style", lv4)
    
        const level3 = document.querySelectorAll("rect[data-level='3']")
        for( element of level3)
            element.setAttribute("style", lv3)
    
        const level2 = document.querySelectorAll("rect[data-level='2']")
        for( element of level2)
            element.setAttribute("style", lv2)
    
        const level1 = document.querySelectorAll("rect[data-level='1']")
        for( element of level1)
            element.setAttribute("style", lv1)

}