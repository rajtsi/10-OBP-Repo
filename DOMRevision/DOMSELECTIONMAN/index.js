console.log("Attached");
console.log(window);
console.log(typeof document);

// Dom selection ways

// document.querySelector('.c');  -> it will return me an object form of 1stmathcing element for this criteria  
// querySelectorAll('.c');-> it will return me and array of all object matching this criteria

let allE=document.querySelectorAll('.c');  //-> only single element matches this criteria 
let h1=allE[0];
let h2=allE[1];
let h3=allE[2]; 

console.dir(h3.textContent);


// document.getElementById('id1') -> object
// document.getElementsByClassName('c') -> array of object 
// document.getElementsByTagName('h1')  -> array of object 

