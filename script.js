var articles        = null
var datePicker      = null
var blankLog        = null
var contextList     = null
var itemsList       = null
var heroText        = null
var title1          = null
var title2          = null
var scriptList      = null

var refTitles = {
    add: 'THÊM',
    ch: 'THAY ĐỔI',
    wip: 'WIP',
    csder: 'CÂN NHẮC',
    dmp: 'ĐÃ BỎ',
    kbug: 'BUG',
    fbug: 'FIXED BUG'
}

var scriptLinks = {
    renzu_vehicleshop: 'https://forum.cfx.re/t/release-renzu-vehicleshop/3997447',
    renzu_jobs: 'https://forum.cfx.re/t/renzu-jobs-job-basic-need-boss-crafting-shop-garage-vehicleshop-armory/4751253',
    Nakres_objespawns: 'https://forum.cfx.re/t/free-object-spawn-standalone/4757038',
    vMenu: 'https://forum.cfx.re/t/vmenu/88868',
    esx_inventoryhud_trunk: 'https://github.com/Trsak/esx_inventoryhud_trunk',
    esx_inventoryhud: 'https://github.com/Trsak/esx_inventoryhud',
    rkl_clothes: 'ttps://forum.cfx.re/t/rkl-clothing-with-any-clothing-shop-meta-data-item/4759094',
    vSync: 'https://forum.cfx.re/t/vsync-v1-4-0-simple-weather-and-time-sync/49710',
    CTF: 'https://forum.cfx.re/t/capture-the-flag-gamemode-ctf/4765988',
    dopeNotify2: 'https://forum.cfx.re/t/release-paid-sodope-notify-standalone/3883357',
    dopeRPChat: 'https://forum.cfx.re/t/release-paid-sodope-3dme-3ddo-3dmed/3877323',
    esx_advancedholdup: 'https://github.com/HumanTree92/esx_advancedholdup',
}

document.addEventListener("DOMContentLoaded", function(event) {
    articles        = document.getElementsByClassName('articles');
    blankLog        = document.getElementById('404');
    // bugLog          = document.getElementById('bugs');
    // scriptLog       = document.getElementById('wips');
    
    datePicker      = document.querySelector('#datePicker');
    contextList     = document.querySelectorAll('.context');
    itemsList       = document.querySelectorAll('li');
    scriptList      = document.querySelectorAll('a');
    refList         = document.querySelectorAll('sp');

    heroText        = document.getElementsByClassName("hero-text")[0];
    title1          = heroText.querySelector('#hero1');
    title2          = heroText.querySelector('#hero2');

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    datePicker.value = today;

    //This will add dates to headers with value == ids
    for (var i = 0, item; item = articles[i]; i++) {
        var id = item.getAttribute('id');
        
        if (id) {
            if (id == '404') {continue;}
            var article = item.querySelector('.header');
            article.innerHTML = id;
        }
    }

    //This will automatically add links into scripts (<sp> tags)
    for (var i = 0, item; item = scriptList[i]; i++) {
        var blank = isBlank(item.innerHTML);
        if (!blank) {
            var innerHTMLString = item.innerHTML;
            //console.log(scriptLinks[innerHTMLString]);
            if (item.href == '') {
                item.href = scriptLinks[innerHTMLString];
                item.target = '_blank';
                item.rel = "noopener noreferrer"
            }
        } 
    }

    //This will automatically create ref titles
    for (var i = 0, item; item = refList[i]; i++) {
        var blank = isBlank(item.innerHTML);
        if (blank) {
            var itemClass = item.getAttribute('class')
            item.innerHTML = refTitles[itemClass]
        } 
    }

    //If blank then insert ul>li>none
    for (var i=0, item; item = contextList[i]; i++) {
        if (isBlank(item.innerHTML)) {
            item.innerHTML = "<ul><li><none>None</none></li></ul>";
        }
    }

    //Add listenter on input[type="date"]
    datePicker.addEventListener('input', (event) => {
        var date = event.target.value;
        search(date);
    })

    // search(today);

    //Add listener on resize event
    window.addEventListener('resize', function(event) {
        resize()
    }, true);

    //Resize elements
    if (isMobile()) {
        //Detects iOS Webview
        var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test( userAgent ),
        ios = /iphone|ipod|ipad/.test( userAgent );

        //Resize elem
        titleHTML        = "[SAS]";
        fontSize         = 50;
        title1.innerHTML = titleHTML;
        title2.innerHTML = titleHTML;
        title1.style.fontSize = fontSize+'px';
        title2.style.fontSize = fontSize+'px';

        for (var i = 0, item; item = articles[i]; i++) {
            var id = item.getAttribute('id');
            
            if (id) {
                var box = item.querySelector('.box');
                item.style.fontSize = '100%';
                item.style.padding  = '5%';
                box.style.padding   = '10%';
            }
        }

        if (ios) {
            if (!safari) {
                for (var i=0, item; item = itemsList[i]; i++) {
                    item.style.marginBottom = "10%";
                }
            }
        }
    } else {
        resize();
    }
    
    //Show all articles at startup
    showAll();

});

//Check if using a mobile device/screen
function isMobile() {
    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    if (width <= 800) {
        return true;
    } else {
        return false;
    }
}

//Resize elements
function resize() {
    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    var titleHTML    = null;
    var fontSize     = null;

    if (width <= 1200) {
        if (width <= 800) {
            if (width <= 600) {
                titleHTML       = "[SAS]";
                fontSize        = 50;
            }
            else {
                titleHTML       = "StuAgainstSlep";
                fontSize        = 50;
            }
        }
        else {
            titleHTML       = "StudentAgainstSleep";
            fontSize        = 70;
        }   
    }
    else {
        titleHTML       = "Student Against Sleep";
        fontSize        = 100;
    }

    title1.innerHTML      = titleHTML;
    title2.innerHTML      = titleHTML;

    title1.style.fontSize = fontSize+'px';
    title2.style.fontSize = fontSize+'px';

}

//Show all articles except blank article 404
function showAll() {
    for (var i=0, item; item = articles[i]; i++) {
        var id = item.getAttribute('id');

        if (id) {
            if (id != '404') {
                document.getElementById(id).style.display = "block";
            }
            else {
                document.getElementById(id).style.display = "none";
            }
        }

    }
}

//Search date, filter out articles and show the desired article
function search(date) {
    var found = false;
    //console.log(date)
    for (var i = 0, item; item = articles[i]; i++) {
        var id = item.getAttribute('id');
        //console.log(id);    
        if (id === date) {
            document.getElementById(id).style.display = "block";
            found = true;
        }
        else {
            document.getElementById(id).style.display = "none";
        }
    }
    //If not found insert no changelog with the title as date
    if (!found) {
        blankLog.querySelector('.header').innerHTML = date;
        blankLog.querySelector('.sub-title').innerHTML = "<nolog>[No log here]</nolog>";
        blankLog.style.display = "block";

        // bugLog.style.display = "none";
        // scriptLog.style.display = "none";
    }
    else {
        blankLog.style.display = "none";

        // bugLog.style.display = "block";
        // scriptLog.style.display = "block";
    }
}


//Utils
function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}
function isMobile() {
    if(window.innerWidth <= 800) {
      return true;
    } else {
      return false;
    }
}