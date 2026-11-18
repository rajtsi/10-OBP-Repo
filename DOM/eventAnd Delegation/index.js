console.log("worked");


let pc2= document.getElementById('pc2');
let par = pc2.parentElement;


par.addEventListener('click',function(event){
    console.log('parent was clicked capturing');
    console.log(event.target);
    console.log(event.currentTarget);
},true);// capturing 

par.addEventListener('click',function(event){
    console.log('parent was clicked bubbulling');
})// bubbulling

pc2.addEventListener('click',function(event){
    console.log('child was clicked capturing');
   // console.dir(event.target);
     event.stopPropagation();
},true);

pc2.addEventListener('click',function(event){
    console.log('child was clicked bubbeling');
   // console.dir(event.target);
    // event.stopPropagation();
});

let mykeyset= new Set();

document.addEventListener('keydown',function(event){
    event.preventDefault();
    console.log(event.key);
    mykeyset.add(event.key.toLocaleLowerCase());

    // myset.add(event.key);
    // console.log(event.ctrlKey);
    // console.log(event.shiftKey);
    // console.log(event.altKey);
    // console.log(event.metaKey);
    // if(event.key.toLocaleLowerCase()==='a' && event.key.toLocaleLowerCase()==='b')
    // {
    //     console.log("yes we pressed ctrl+ s");
    //     alert("YOU TRIED TO SAVE THIS PAGE ");

    // }
    let a=false;
    let b=false;

    for(let x of mykeyset)
    {
     
     if(x==='a')a=true;
     if(x==='b')b=true;

    }

    if (a && b)
    {
        console.log('yes we have a and b pressed');
    }


});

document.addEventListener('keyup',function(event){
    mykeyset.delete(event.key.toLocaleLowerCase());

});



pc2.addEventListener('mousedown',function(event){
    console.log('mouse was clicked');

    
});
pc2.addEventListener('mouseup',function(event){
    console.log('mouse click ended ');
});

document.addEventListener('mousemove',function(event){
   // console.log('mouse is moving ');
    console.log(event.clientX,
    event.clientY,
    event.pageX,
    event.pageY);
});


// any event have 3 stages (phase)

//  capturing ->  going to target from outer most ancesster 1st this will occure, for triggering event listnerin this phase use true as 3rd parameter 

//  bubbuling ->  going from target to outermost ancesster back 3rd this will occure 

//  and target -> time when my event is at the target 2nd this will occure 

//  target -> gived me the target element that is on which the event was triggered 
//  and currentTarget -> gived me the currenct element at which my event is 

// if you added event.stopPropagation(); any where your event propogation will stop at that point 





