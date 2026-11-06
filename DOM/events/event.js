// // console.log('attached');

// let mybtn=document.getElementById('btn');
// let mydiv = document.getElementsByClassName('c')[0];
// let myi=document.querySelector('input');

// myi.addEventListener('focus',function(){
//     console.log('yes focus ');
//     // myp.textContent='This is after clicking';

// })
// myi.addEventListener('blur',function()
// {
//     console.log('yes blurred');
// })
// myi.addEventListener('input',function()
// {
//     console.log(myi.value);
// })

// myi.addEventListener('change',function()
// {
//     console.log('this was change event ');
// })

let count=0; // state variable 
let pbutton= document.getElementsByClassName('btnp')[0];
// let rbutton= document.getElementsByClassName('btnr')[0];
// let sbutton= document.getElementsByClassName('btns')[0];
let mycount =document.getElementsByTagName('h1')[0];





// pbutton.onclick = function(){  
//   alert('dice thrown');
// }

// pbutton.onclick = function(){  
//     let contentofcount=Math.ceil(Math.random()*6);
//     console.log(contentofcount);
//     mycount.textContent=contentofcount;
// }

// pbutton.onclick = function(){  
//     let contentofcount=Math.ceil(Math.random()*6);
//     console.log(contentofcount);
//     mycount.textContent=contentofcount;
// }

pbutton.addEventListener('click',function(){
    // console.log('+');
    // let contentofcount=mycount.textContent; // when you read the value using textContent its in string form so make sure to use as per data type 
    // contentofcount= Number(contentofcount)
    // contentofcount=contentofcount+1;
    // console.log(contentofcount);

    let contentofcount=Math.ceil(Math.random()*6);
    console.log(contentofcount);
    mycount.textContent=contentofcount;
});


pbutton.addEventListener('click',function(){
    // console.log('+');
    // let contentofcount=mycount.textContent; // when you read the value using textContent its in string form so make sure to use as per data type 
    // contentofcount= Number(contentofcount)
    // contentofcount=contentofcount+1;
    // console.log(contentofcount);

       alert('dice thrown');

});

pbutton.addEventListener('click',function(){
     console.log('+');
    // let contentofcount=mycount.textContent; // when you read the value using textContent its in string form so make sure to use as per data type 
    // contentofcount= Number(contentofcount)
    // contentofcount=contentofcount+1;
    // console.log(contentofcount);

      // alert('dice thrown');

});



// rbutton.addEventListener('click',function(){
//     console.log('^');
// });

// sbutton.addEventListener('click',function(){
//     console.log('-');
// });

// List Of events 

// https://www.w3schools.com/js/js_events.asp



// 1-6+1

// (0.2*multipleyby (Max range - min range))+min range

// 00.2*5=1+1=>2

// 0.0000*6=>0.0000+1=1.0000
// 0.99*5=   4.95

// 1-> 1
// 1-1.99-> 2
// 2-2.999-> 3