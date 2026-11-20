
let box= document.getElementById('box');
console.log(box);

let clicked=false;
let  mouseLeft = 0;
let  mouseTop = 0;
box.addEventListener('mousedown',function(event)
{ 
    clicked=true;
    mouseLeft = event.offsetX ;
    mouseTop = event.offsetY;

});

document.addEventListener('mouseup',function(event)
{ 
    clicked=false;
      mouseLeft = 0;
        mouseTop = 0;
});




box.addEventListener('mousemove',function(event){
    console.log(clicked);
     if(!clicked)return;
      
        console.log("these are left and rigth of cursor in current element", mouseLeft,mouseTop);

     let mouseX=event.clientX ;
     let mouseY=event.clientY ;

     console.log('these are teh corrdinates of mouse ',mouseX, mouseY)
     mouseX-=mouseLeft;
     mouseY-=mouseTop;
     box.style.left=mouseX +'px';
     box.style.top=mouseY +'px';
     console.log('this is the value that we setted',box.style.left, box.style.top);
     
});