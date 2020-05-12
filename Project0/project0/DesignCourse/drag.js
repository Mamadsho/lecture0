function startup(){
var item=document.getElementById("item");
var container=document.getElementById("container");

var active=false;
var curX;
var curY;
var initX;
var initY;
var xOffset=0;
var yOffset=0;

container.addEventListener("touchstart",dragStart, false);
container.addEventListener("touchend",dragEnd, false);
container.addEventListener("touchmove",drag,false);

function dragStart(e){
    initX=e.touches[0].clientX-xOffset;
    initY=e.touches[0].clientY-yOffset;

    if(e.target===item){
        active=true;
     }
}
function drag(e){
    if(active){
        e.preventDefault();

        curX=e.touches[0].clientX-initX;
        curY=e.touches[0].clientY-initY;

        xOffset=curX;
        yOffset=curY;
        container.style.backgroundColor="#000000;"
        setTranslate(xOffset,yOffset,item);
    }
}
function dragEnd(e){
    initX=curX;
    initY=curY;

    active=false;
}
function setTranslate(cX, cY,dragItem){
    if(cX<dragItem.parentElement.offsetWidth/2){dragItem.style.transform="translate3d("+cX+"px, "+cY+"px, 0)";}
}
}


document.addEventListener("DOMContentLoaded",startup);