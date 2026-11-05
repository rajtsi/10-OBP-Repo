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


let pbutton= document.getElementsByClassName('btnp')[0];
let rbutton= document.getElementsByClassName('btnr')[0];
let sbutton= document.getElementsByClassName('btns')[0];
let mycount =document.getElementsByTagName('h1')[0];

pbutton.addEventListener('click',function(){
    console.log('+');
    let contentofcount=mycount.textContent;
    contentofcount= Number(contentofcount)
    contentofcount=contentofcount+1;
    console.log(contentofcount);
    mycount.textContent=contentofcount;
});


rbutton.addEventListener('click',function(){
    console.log('^');
});

sbutton.addEventListener('click',function(){
    console.log('-');
});