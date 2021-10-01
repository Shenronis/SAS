var articles    = null
var datePicker  = null
var blankLog    = null
var contextList = null
var itemsList    = null
var heroText    = null
var title1      = null
var title2      = null

document.addEventListener("DOMContentLoaded", function(event) {
    articles    = document.getElementsByClassName('articles')
    blankLog    = document.getElementById('404');
    datePicker  = document.querySelector('#datePicker')
    contextList = document.querySelectorAll('.context')
    itemsList    = document.querySelectorAll('li')

    heroText     = document.getElementsByClassName("hero-text")[0];
    title1       = heroText.querySelector('#hero1');
    title2       = heroText.querySelector('#hero2');

    //This will add dates to headers with value == ids
    for (var i = 0, item; item = articles[i]; i++) {
        var id = item.getAttribute('id');
        
        if (id) {
            if (id == '404') {break;}
            var article = item.querySelector('.header');
            article.innerHTML = id;
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
        titleHTML       = "[SAS]";
        fontSize        = 50;
        title1.innerHTML      = titleHTML;
        title2.innerHTML      = titleHTML;

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
        blankLog.querySelector('.sub-title').innerHTML = "<nolog>[No Changelog]</nolog>";
        blankLog.style.display = "block";
    }
    else {
        blankLog.style.display = "none";
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