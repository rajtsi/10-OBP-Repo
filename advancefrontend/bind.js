let obj1={
 Name:"Rajat",
 func:function(pr1,pr2,pr3)
 {
    console.log(`The list of score of ${this.Name}  ${pr1}  ${pr2}  ${pr3} `);
     
 }
}

let obj2={
    Name:"Singh"
}

let obj3={
Name:"Singh1",
LL:"lalal"
}
//linking with obj2 and instently calling it

// what if i just wanst to link this inside the func of obj1 with the obj2 only and not call it as of now

obj1.func.call(obj2,20,30,40);

let rfu=obj1.func.bind(obj3,20,30,90);
rfu();

//  function(pr1,pr2,pr3)
//  {
//     console.log(`The list of score of ${obj2.Name}  ${pr1}  ${pr2}  ${pr3} `);
     
//  }



// console.log(Math.max.call({},90,900,9999,999,100000,10009999));

// let arr = [100,10000];

// console.log(Math.max.apply({},arr));











