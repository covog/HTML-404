//禁止鼠标右键菜单和F12打开控制台看源码
function click(e) {
if (document.all) {
if (event.button==2||event.button==3) {
alert("禁止大陸IP訪問");
oncontextmenu='return false';
}
}
if (document.layers) {
if (e.which == 3) {
oncontextmenu='return false';
}
}
}
if (document.layers) {
document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown=click;
document.oncontextmenu = new Function("return false;")
document.onkeydown =document.onkeyup = document.onkeypress=function(){
if(window.event.keyCode == 123) {
window.event.returnValue=false;
return(false);
}
}
// <--123——112是F1-F12的代码数-->
