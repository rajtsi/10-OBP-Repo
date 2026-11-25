
let arr=[10,20,30,40];
let sarr=["a","b","c",'d'];

let rarr=[];



for( let i =0;i<arr.length;i++)
{
  let obj = new MakeObj(sarr[i],arr[i],i);
  rarr.push(obj);

}

console.log(rarr);

function MakeObj(str, code, ppp)
{
    this[ppp]=str; 
    this.ccode=code;
    console.log("jjjj");
}

let myObj= new MakeObj("rajat",20,'LL');
console.log(myObj);

