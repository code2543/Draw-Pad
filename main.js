var mouseEvent="empty";
var lastX,lastY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthofline=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
    color=document.getElementById("color").value;
    widthofline=document.getElementById("width").value;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    currentX=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        console.log("last positions of x and y coordinates are");
        console.log("x="+lastX+" y="+lastY);
        ctx.moveTo(lastX,lastY);
        console.log("current positions of x and y coordinates are");
        console.log("x="+currentX+" y="+currentY);
        ctx.lineTo(currentX,currentY);
        ctx.stroke();
    }
    lastX=currentX;
    lastY=currentY;
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}