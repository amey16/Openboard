// not working properly
const zoomin=document.querySelector(".zoom-in");
const zoomout=document.querySelector(".zoom-out");

zoomin.addEventListener("click",function(e){

    ctx.scale(1.2,1.2);
    // ctx.translate(-50,-0);
    redraw();
})
zoomout.addEventListener("click",function(){
    
    ctx.scale(0.85,0.85);
    // ctx.translate(50,20)
    redraw();
})
