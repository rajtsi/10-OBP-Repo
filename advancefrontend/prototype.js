function Maker(a,b,c,d) // -> "Name", "Rajat", c= "Class", d= 10;
{
  this.a1=b;
  this[a]=b;
  this[c]=d;
}

let obj = new Maker( "Name", "Rajat", "Class", 10);
let obj2= new Maker( "Name", "Rat", "Class", 10);

Maker.prototype.func=function(){console.log(10);}
console.log(obj.__proto__);
console.log(Maker.prototype);
console.log(obj);
console.log("this is func inside obj",obj.func===obj2.func);


// {
//   a://   Name:"Rajat",
//   Class : 10,
// }



