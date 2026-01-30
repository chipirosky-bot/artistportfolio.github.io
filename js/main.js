
var color = "black";

$(document).ready(function(){
    
    onload()
    //onclickColor()
});


function getURL(){
    $.extend({
      getUrlVars: function(){
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
          hash = hashes[i].split('=');
          vars.push(hash[0]);
          vars[hash[0]] = hash[1];
        }
        return vars;
      },
      getUrlVar: function(name){
        return $.getUrlVars()[name];
      }
    });
     
    // Get object of URL parameters
    var allVars = $.getUrlVars();
     
    // Getting URL var by its nam
    var byName = $.getUrlVar('col');
    //alert("parametro q es:"+byName);

    return byName;
}


function onload(){


    $('a').toggleClass("text-grey-black");
    var col = getURL();

    

    if(color == "black"){
        $('span').toggleClass("text-white");
    }
    else{
        onclickColor();
    }

    Time();
    
}

function work(){

    // // 1
    // file = fopen(getScriptPath("n_fotos.txt"), 0);
    // file_length = flength(file); 
    // content = fread(file, file_length);
    // num_fotos = content;

    // //2
    // fetch('/txt/n_fotos.txt')
    // .then(res => res.text())
    // .then(content => {
    //     let lines = content.split(/\n/);
    //     lines.forEach(line => num_fotos = line);
    // });

    // //3
    // if (window.XMLHttpRequest)
    // {// code for IE7+, Firefox, Chrome, Opera, Safari
    //     xmlhttp=new XMLHttpRequest();
    // }
    // else
    // {// code for IE6, IE5
    //     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    // }
    // xmlhttp.open("GET","txt/n_fotos.txt",false);
    // xmlhttp.send(null);
    // var xmlDoc=xmlhttp.responseText;

    // for(var i = 0;i<xmlDoc.lenght; i++){
    //     num_fotos = parseInt(xmlDoc[i]);
    // }

    var codeInit = `<div>
                        <div>
                            <div class="grid expandir">`;

    var codeEnd = `</div>  
                </div>
            </div>`;  

    var code = "";
    for(var i = 1; i <= num_fotos; i++){
        code = code + `<div class="col-sm-12 col-lg-4 columnas">
                        <div class="card grid--ele imgBx" onmouseover="onhoverout('${i}')" onmouseout="onhoverout('${i}')">
                            <a href="" title="Depop shoes cards">
                                <img width="240" height="400" src="img/P${i}/P_${i}_1.jpg" class="img-list attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" sizes="(max-width: 1756) calc(100vw - 40px), (max-width: 768) calc(50vw - 37.5px), 821px">            
                                <div class="details _Ostia_Antica">
                                </div>
                            </a>                                
                        </div>
                    </div>
                    <div class="col-sm-12 _Ostia_Antica divMov"><span class="title titleMov textMov" id="">Depop shoes cards</span></div>
                    `;

        if(i % 3 == 0){
            code = code + `<div class="lcol-sm-12 col-lg-4 text _Ostia_Antica textoHover spanNoMov"><span class="title non-selectable " id="spanimg${i-2}">Depop shoes cards</span></div>
            <div class="lcol-sm-12 col-lg-4 text _Ostia_Antica textoHover spanNoMov"><span class="title non-selectable " id="spanimg${i-1}">La cura</span></div>
            <div class="lcol-sm-12 col-lg-4 text _Ostia_Antica textoHover spanNoMov"><span class="title non-selectable " id="spanimg${i}">Estancias de sombra</span></div>`;
        }
    }

    var codeTotal = codeInit + code + codeEnd;

    
}


function onclickColor(){
    $('body').toggleClass("black");
    $('body').toggleClass("white");

    $('nav').toggleClass("black");
    $('nav').toggleClass("white");

    $('a').toggleClass("text-grey");
    $('a').toggleClass("text-grey-black");

    $('span').toggleClass("text-black");
    $('span').toggleClass("text-white");

    if(color == "black"){
        color = "white";
    }
    else{
        color = "black";
    }
}


function Time() {
    // Creating object of the Date class
    var date = new Date();
    // Get current hour
    var hour = date.getHours();
    // Get current minute
    var minute = date.getMinutes();
    // Get current second
    var second = date.getSeconds();
    // Variable to store AM / PM
    var period = "";
    // Assigning AM / PM according to the current hour
    if (hour >= 12) {
        period = "PM";
    }
    else {
        period = "AM";
    }
    
    // Converting the hour in 12-hour format
    if (hour == 0) {
        hour = 12;
    }
    else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }
    
    // Updating hour, minute, and second
    // if they are less than 10
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    // Adding time elements to the div
    document.getElementById("digital-clock").innerText = hour + ":" + minute + ":" + second + " " + period;
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);
}


// Function to update time elements if they are less than 10
// Append 0 before time elements if they are less than 10
function update(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}


