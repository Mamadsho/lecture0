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

container.addEventListener("mousedown",dragStart, false);
container.addEventListener("mouseup",dragEnd, false);
container.addEventListener("mousemove",drag,false);

function dragStart(e){
    initX=e.clientX-xOffset;
    initY=e.clientY-yOffset;

    if(e.target===item){
        active=true;
    }
}
function drag(e){
    if(active){
        e.preventDefault();

        curX=e.clientX-initX;
        curY=e.clientY-initY;

        xOffset=curX;
        yOffset=curY;

        setTranslate(xOffset,yOffset,item);
    }
}
function dragEnd(e){
    initX=curX;
    initY=curY;

    active=false;
}
function setTranslate(cX, cY,dragItem){
    dragItem.style.transform="translate3d("+cX+"px, "+cY+"px, 0)";
}
}


document.addEventListener("DOMContentLoaded",startup);