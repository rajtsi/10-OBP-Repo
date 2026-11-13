// - Adding js file and attaching it with html  for dynamic and functional behaviour
// 3 ways of attaching js file

// -how to select and dom  element that is nothing but an element in html
// -how we can modify the selected element using js -> textContent,innerHTML, elementName.style... 

// - how to write a code where where some part of code runs on a particular event 
//   so we has some events like  click input focus ect  using these events we can trigger a part of js code for that we needed to attach event listners with teh elements 

// - Even for addition of event e had 2 ways for adding clickEvent elementName.onclick=  here we can give a function 
// and another way was just using addEventListnerswith clickevent

//  - how we can create elements dynamically using just js 









// let myNewElement = document.createElement('tageName') -> you can create an element live using js 

// parentName.appendChild(myNewElement); / adding at the end 

// document.insertBefore(the newnode, reference node)// here add an element just before another child element inside a parent  

// parentName.appent(multiple childs also you can give a string give them comma seperated);// add elements at the end of child list 

// parentName.prepend(multiple childs or strings comma seperated) // add elemets at the top of child lists


// elementName.remove() // element name is the name of variable in which you selected the element that you wants to remove

// parentName.removeClild(childName); // remove child using parent name


let pbutton= document.getElementsByClassName('btnp')[0];

let rbutton= document.getElementsByClassName('btnr')[0];

let sbutton= document.getElementsByClassName('btns')[0];

let countElement = document.getElementsByClassName('val')[0];

let eDiv= document.getElementById('ev');
let hend= document.getElementById('hend');

let nameinput=document.getElementById('name');


let myform= document.getElementById('myform');
let formbuttom = document.getElementById('mybutton');

let formCity= document.getElementById('city');


myform.addEventListener('submit',function(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    alert(`${data.Name} You are sucessfuly logged in city ${formCity.value}`);

})


pbutton.addEventListener('click',function(){

    console.log('+ is working');

 // your countElement here is not a number okk its an object so you cnanot sirect increate its value 

 let countValue=countElement.textContent;
 console.log(countValue);
 countValue=Number(countValue);

// delete steps
let childh6= document.querySelector('#ev h6')
if(childh6)
{
       eDiv.removeChild(childh6);
}

 let myNewElement = document.createElement('h6');
 myNewElement.textContent=countValue;

 countValue=countValue+1;
 countElement.textContent=countValue;
//  eDiv.prepend(myNewElement,'This was just before update');

console.log(countElement);
console.log(eDiv);
console.log(eDiv.children);
eDiv.insertBefore(myNewElement,hend);
 

});

rbutton.addEventListener('click',function(){
    console.log('r is working');
});

sbutton.addEventListener('click',function(){
    console.log('- is working');
});










