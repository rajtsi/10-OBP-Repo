

let obj={
a:"rajat",     // values can be of any type like array, number, string ,null,function , object, boolean
//if value is not a function// properties of object 
func: function(){console.log("test");}, // method of object 

objk:{
    l:10,
    p:{k:90 }
}

};
 
// 
let Name="ll";

// obj.KeYName=Value ;// this is when you already knowthe keyname
// obj.KeYName// reading the value of this key
// delete obj.KeYName // this is for deleting thus key 

// obj[KeYName]=Value;
// obj[KeYName]
// delete obj[KeYName];

// obj['Name']="Singh";

// obj.func

for(let key in obj)
{
    console.log(obj[key]);
}

console.log(obj);
let arrofKeys=['a','k','c'];
let inobj={}

let myKeys= Object.keys(obj);
let myValues= Object.values(obj);