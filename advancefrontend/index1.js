let inp = document.getElementById('inp');
let btn = document.getElementById('btn');


let val = localStorage.getItem('inpVal');
if(val)
{
  inp.value=val;
}



inp.addEventListener('input',function(event){
 localStorage.setItem('inpVal',inp.value);
});


btn.addEventListener('click',function(event){
inp.value='';
localStorage.removeItem('inpVal');

});