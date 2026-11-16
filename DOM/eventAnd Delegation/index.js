console.log("worked");


let pc2= document.getElementById('pc2');
let par = pc2.parentElement;


par.addEventListener('click',function(event){
    console.log('parent was clicked capturing');
    console.dir(event.target);
    console.log(event.currentTarget);
},true)

par.addEventListener('click',function(event){
    console.log('parent was clicked bubbulling');
})

pc2.addEventListener('click',function(event){
    console.log('child was clicked bubbuling');
    console.dir(event.target);
    event.stopPropagation();
})

let myset=new Set();

document.addEventListener('keydown',function(event){
    console.log(event.key);
    myset.add(event.key);
    // console.log(event.ctrlKey);
    // console.log(event.shiftKey);
    // console.log(event.altKey);
    // console.log(event.metaKey);
    event.preventDefault();

    if(event.ctrlKey && event.key.toLocaleLowerCase()==='s')
    {
        console.log("yes we pressed ctrl+ s");
    }


});

// document.addEventListener('keyup',function(event){console.log('key was relesed')});


// any event have 3 stages (phase)

//  capturing ->  going to target from outer most ancesster 1st this will occure, for triggering event listnerin this phase use true as 3rd parameter 

//  bubbuling ->  going from target to outermost ancesster back 3rd this will occure 

//  and target -> time when my event is at the target 2nd this will occure 

//  target -> gived me the target element that is on which the event was triggered 
//  and currentTarget -> gived me the currenct element at which my event is 

// if you added event.stopPropagation(); any where your event propogation will stop at that point 





