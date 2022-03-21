var articles        = null
var datePicker      = null
var blankLog        = null
var contextList     = null
var itemsList       = null
var heroText        = null
var title1          = null
var title2          = null
var scriptList      = null

const webhook = 'https://discord.com/api/webhooks/896233622099595285/Pqn0qJw-FsnRk42kwJwt0zXZMGfmzPLwaocm2I7XxeYBllyKJuChz6lG9eMAeGVehY1M'

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
    gcphone_reignited: 'https://forum.cfx.re/t/release-re-ignited-gcphone-esx-1-1-1-2-final/1517438',
    xSpeedometer: 'https://forum.cfx.re/t/release-xspeedometer-tesla-styled-speedometer-for-fivem/974516',
    pma_voice: 'https://forum.cfx.re/t/release-voip-pma-voice-mumble-voip-alternative/1896255',
    Eclipse_Job_Electrician: 'https://forum.cfx.re/t/esx-paid-eclipse-job-electrician/4765233',
    BulgaR_shooting_range: 'https://forum.cfx.re/t/bulgar-shooting-range-practical-exam-esx/4766310',
    okokBilling: 'https://forum.cfx.re/t/okokbilling-qbcore-esx-paid/4319744',
    radialmenu: 'https://forum.cfx.re/t/release-radialmenu-configurable-menu-for-chat-commands-using-wheelnav-js/543690',
    esx_menu_default_redesign: 'https://forum.cfx.re/t/esx-esx-menu-default-redesign/3714109',
    esx_constructorjob: 'https://forum.cfx.re/t/paid-esx-constructor-job/3354360',
    CrewSystem: 'https://forum.cfx.re/t/release-crew-system-with-player-blip-paid/2318681',
    scrapman_job: 'https://github.com/ArielZ123/ScrapMan-Job',
    aquiver_3rd_poker: 'https://forum.cfx.re/t/standalone-or-esx-paid-aquiver-three-card-poker/3378769',
    FiveM_Streamer: 'https://www.youtube.com/watch?v=P0wE3M5j5KQ',
    renzu_customs: 'https://forum.cfx.re/t/renzu-customs-unique-and-advanced-mechanic-tuning-lscustom-lscustoms/4755869',
    renzu_clothes: 'https://forum.cfx.re/t/renzu-clothes-advanced-clotheshop-and-wardrobe/4769462',
    renzu_scoreboard: 'https://forum.cfx.re/t/release-renzu-scoreboard-unique-ui-roleplay-purpose/4243946',
    kc_tricks: 'https://forum.cfx.re/t/standalone-motocross-tricks-kc-tricks-free/4773158',
    Prefech_playTime: 'https://forum.cfx.re/t/prefech-playtime/4772300',
    gcphone: 'https://forum.cfx.re/t/release-re-ignited-gcphone-esx-1-1-1-2-final/1517438',
    Death_System: 'https://forum.cfx.re/t/release-free-dojrp-based-advanced-death-system/4502892/9',
    XNLRankBar: 'https://forum.cfx.re/t/release-xnlrankbar-fully-working-original-gta-rankbar-xp-bar-natively-with-original-gta-levels/318839',
    cuchi_moneyStats: 'https://forum.cfx.re/t/free-money-statistics-statistics-about-money-on-the-server/4769000',
    Seatbelt: 'https://forum.cfx.re/t/release-seatbelt-updated/449900',
    esx_jail: 'https://forum.cfx.re/t/release-esx-jail/82896',
    checkdeathcause:'https://forum.cfx.re/t/esx-release-esx-checkdeathcause/108636',
    loffe_animations: 'https://github.com/Loffes/animations',
    trew_hud: 'https://forum.cfx.re/t/release-trew-hud-ui-a-lightweight-hud-for-esx-vrp-and-vrpex/890303',
    cui_wardrobe: 'https://forum.cfx.re/t/release-cleanui-wardrobe/2104620',
    AntiPeak: 'https://forum.cfx.re/t/free-standalone-anti-third-person-aim-glitches-left-right-peak/4787786',
    PolyZone: 'https://github.com/mkafrin/PolyZone',
    CayoTwoIslands: 'https://forum.cfx.re/t/releases-free-cayotwoislands/4799534',
    mb_begging: 'https://forum.cfx.re/t/free-esx-mb-begging/4790560',
    esx_carthief: 'https://github.com/KlibrDM/esx_carthief',
    bike_rental: 'https://forum.cfx.re/t/release-esx-bike-rental-v5/116465',
    mhacking: 'https://github.com/davedorm/mhacking',
    esx_knatusblowtorch: 'https://github.com/Knaak53/esx_knatusblowtorch',
    BCall_Ilegal: 'https://forum.cfx.re/t/paid-esx-qb-illegal-missions-with-npc-interaction-v2/4825980?fbclid=IwAR2Jc8FQsMb3MOckNNzkMbjGKpQyXqXJ289ZpeCwBTcpYdMr9hsbSFGYY4c'
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

    // This will add dates to headers with value == ids
    // Now with button to report
    for (var i = 0, item; item = articles[i]; i++) {
        var id = item.getAttribute('id');
        
        if (id) {
            if (id == '404') {continue;}
            var article = item.querySelector('.header');

            var articlesection = item.querySelector('.article-header')
            article.innerHTML = id;
            if (!isMobile()) {
            let articlebtn = document.createElement("button")
            articlebtn.id = id
            articlebtn.innerHTML = '<i class="fas fa-paper-plane"></i>'
            articlesection.appendChild(articlebtn)
            articlebtn.addEventListener('click', function() {
                document.body.classList.add('modal-open')
                let form = htmlToElement(`
                    
                <div id="modal">
                    <div class="bg-blur"></div>
                    <div class="bg-modal">
                        <div class="modal-content">
                            <div class="close">+</div>                            
                            <div class="wrapper">
                                <form id="feedback">
                                    <label for='date'>Ticket</label>
                                    <input type="text" name="date" autocomplete="off" value="`+articlebtn.id+`" disabled>

                                    <label for='title'>Tựa đề</label>
                                    <input type="text" name="title" id="" autocomplete="off" placeholder="Here's a raise">

                                    <label for='context'>Comment</label>
                                    <textarea name="context" id="" cols="30" rows="10" placeholder="Em lam tot lam 😏😏😏"></textarea>

                                    <br>
                                    <div style="text-align: center;">
                                        <button id="feedback-submit" type="submit" class="btneffect">Gửi</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                `)
                document.body.appendChild(form)
                
                let modal = document.querySelector('#modal')
                let marginFromTop = window.scrollY
                let closebtn = modal.querySelector('.close')
                let formcontent = modal.querySelector('#feedback')
                let submit = modal.querySelector('button')

                // Push modal to current view
                modal.style.marginTop  = marginFromTop + 'px'
                
                // Listener for close button
                closebtn.addEventListener('click', function() {
                    document.getElementById('modal').outerHTML = ""
                    document.body.classList.remove('modal-open')
                })

                formcontent.addEventListener('submit', function(event){
                    event.preventDefault()
                })

                // Submit btn
                submit.addEventListener('click', function(){                 
                    sendWebhook(formcontent)
                })
                
            })
            }
        }
    }

    // This will automatically add links into scripts (<sp> tags)
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

    // This will automatically create ref titles
    for (var i = 0, item; item = refList[i]; i++) {
        var blank = isBlank(item.innerHTML);
        if (blank) {
            var itemClass = item.getAttribute('class')
            item.innerHTML = refTitles[itemClass]
        } 
    }

    // If blank then insert ul>li>none
    for (var i=0, item; item = contextList[i]; i++) {
        if (isBlank(item.innerHTML)) {
            item.innerHTML = "<ul><li><none>None</none></li></ul>";
        }
    }

    // Add listenter on input[type="date"]
    datePicker.addEventListener('input', (event) => {
        var date = event.target.value;
        search(date);
    })

    // search(today);

    // Add listener on resize event
    window.addEventListener('resize', function(event) {
        resize()
    }, true);

    // Resize elements
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
    
    // Show all articles at startup
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

//Webhook
function sendWebhook(form) {
    var titlemsg = form.title.value
    var contextmsg = form.context.value
    var ticket = form.date.value
    let btn = document.querySelector('#feedback-submit')

    if (isBlank(titlemsg) || isBlank(contextmsg)) {
        alert('Please fill the form')
    } else {

        btn.disabled = true
        btn.classList.remove('btneffect')
        btn.innerHTML = '<i class="fas fa-sync fa-spin"></i>'
        btn.style.backgroundColor = 'whitesmoke'
        btn.style.color = '#1d1d1d' 

        var msg = {
            "content": "```Ticket: " + ticket + "\n\nTitle: " + titlemsg + "\n\nMsg: " + contextmsg + "```"
        }
    
        fetch(webhook + '?wait=true',{
            "method":"POST",
            "headers": {
                "content-type":"application/json"
            },
            "body": JSON.stringify(msg)
        }).then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
        }).then(function(response) {
            
            btn.innerHTML = '<i class="fas fa-check"></i>'
            btn.style.backgroundColor = 'limegreen'
            btn.style.border = 'limegreen'
            
        }).catch(function(error) {

            btn.innerHTML = '<i class="fas fa-times"></i>'
            btn.style.backgroundColor = 'red'
            btn.style.border = 'red'
        });
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
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}