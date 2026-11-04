// // console.dir(document);

// // let myelement= document.querySelectorAll('button');

// // myelement[0].innerText='button1';
// // console.dir(myelement[0].innerText);

// let element1= document.querySelector('#id1');
// let element2= document.querySelector('#id2');
// let ll= document.querySelector('a');

// element1.textContent='<h1>This is after Change</h1>';

// console.log(element1);
// element2.innerHTML='<button>This is after Change</button>';

// element2= document.querySelector('#id2');
// console.log(element2);
// let classes= element2.getAttribute('class');
// let classL=classes.split(' ');
// console.log(classL);

// element2.setAttribute('class','c4');


// classes= element2.getAttribute('class');
// classL=classes.split(' ');
// console.log(classL);


// console.log(ll.getAttribute('id'));
// let k=false;
// if(true)
// ll.setAttribute('id','settedId');

// console.log(element2.className);
// element2.className='thisissetbydirectaccess';
// console.log(element2.className);
// ll.id='thisisnewid';

// console.log(ll.getAttribute('id'));



console.log('these are checks for different selector');

console.log(document.getElementById('id1')); // its giving me and html element

console.log(document.getElementsByClassName('c1'));// its giving me a list 

console.log(document.getElementsByTagName('a')[0]); // its giving me a list 




// textContent -> only a text can be inserted and no risk of xss attack
// innerHTML -> text and html elements both can be inserted and there is risk of xss attack if by mistake you addess some wrong event handeller

// attributes -> getAttribute(Name of the attribute whose value you want);// if attribuet does not exist you get teh result as null;

// setAttribute(attributeName, value of attribute);




// Feature	element.getAttribute('attr')	Direct Property Access (element.property)	Direct Dataset Access (element.dataset.prop)
// Target Area	The raw HTML source attribute.	The live JavaScript DOM property.	The specialized data-* attribute storage.
// Supported Fields	All attributes (standard and custom).	Predefined standard properties only (id, className, etc.).	Custom data-* attributes only.
// Data Integrity	Returns a String (exactly as it appears in the HTML).	Returns live/parsed values (can be Booleans, Objects, or absolute URLs).	Returns a String via a convenient JavaScript object mapping.
// State Nature	Static. Reflects initial HTML or explicit markup overrides.	Dynamic. Reflects the immediate, current UI state.	Dynamic. Syncs bidirectionally with the underlying HTML attribute.




// Core Methods

// • add(token1, token2, ...)
// Adds one or more class names to the element. Ignores any classes that already exist.javascript
// div.classList.add("active", "visible");
// Use code with caution.
// • remove(token1, token2, ...)
// Removes one or more specified class names from the element.javascript
// div.classList.remove("active", "visible");
// Use code with caution.
// • toggle(token, force)
// If the class is present, removes it and returns false. If it is absent, adds it and returns true. An optional second boolean argument (force) acts as a switch: true forces an add, and false forces a remove.javascript
// div.classList.toggle("dark-mode");