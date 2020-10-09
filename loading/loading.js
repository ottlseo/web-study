/* loading 화면: Image change */

var img = new Array();
        img[0]=new Image(); img[0].src="public/image/loading1.png";
        img[1]=new Image(); img[1].src="public/image/loading2.png";
        img[2]=new Image(); img[2].src="public/image/loading3.png";
var interval=500;
var n=0;
var imgs = new Array("public/image/loading1.png","public/image/loading2.png","public/image/loading3.png");
        
function rotate(){
    if(navigator.appName=="Netscape" && document.getElementById){
        document.getElementById("slide").src=imgs[n];
    } else { document.images.slide.src=imgs[n]; }
    (n==(imgs.length-1))?n=0:n++;
    setTimeout("rotate()",interval);
}