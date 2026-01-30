
var color = "black";

$(document).ready(function(){

    onload()
    //onclickColor()
});

function onload(){
    $('a').toggleClass("text-grey-black");
    
    if(color == "black"){
        $('span').toggleClass("text-white");
    }
    else{
        onclickColor();
    }

    Time();
}


function onhoverin(i){
    //$('#spanimg' + i).toggleClass("spanHover");
    //$('#spanimg' + i + 'b').toggleClass("spanHover");

    $('#spanimg' + i).css("display", "none");
    $('#spanimg' + i + 'b').css("display", "block");

}

function onhoverout(i){

    //$('#spanimg' + i).prop('hidden', function (_, val) { return ! val; });
    $('#spanimg' + i).css("display", "block");


    $('#spanimg' + i + 'b').css("display", "none");

}

function onclickimg(n){

}

function onclickColor(){
    $('body').toggleClass("black");
    $('body').toggleClass("white");

    $('nav').toggleClass("black");
    $('nav').toggleClass("white");

    $('a').toggleClass("text-grey-black");
    $('a').toggleClass("text-grey");
    
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


