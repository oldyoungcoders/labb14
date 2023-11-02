"use strict"; 

var img = document.getElementsByTagName("img")[0];
var utga = ["img/wolf.jpg", "img/panda.png", "img/lion.png", "img/forest.png", "img/beach.jpg"];
var i = -1;


function next(){
    i++;
    img.src = utga[i];
    if(i>=utga.length-1){
        i=-1;
    }
}


function prev(){
    i--;

    if(i<0){
        i=utga.length-1;
    } 

    img.src=utga[i];
}

var a ;
function auto(){
    i++;
    img.src = utga[i];
    if(i>=utga.length-1){
        i=-1;
    }

    setTimeout(auto,600);
}

function stop(){
    clearTimeout(a);
}