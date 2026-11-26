
// let arr=[10,20,30,40];
// let sarr=["a","b","c",'d'];

// let rarr=[];



// for( let i =0;i<arr.length;i++)
// {
//   let obj = new MakeObj(sarr[i],arr[i],i);
//   rarr.push(obj);

// }

// console.log(rarr);

// function MakeObj(str, code, ppp)
// {
//     this[ppp]=str; 
//     this.ccode=code;
//     console.log("jjjj");
// }

// let myObj= new MakeObj("rajat",20,'LL');
// console.log(myObj);



// let arr1=[];

// for( let i=0;i<100;i++)
// {

//     let obj={};
//     if(i<10)
//     {
//         obj['a']=i;
//     }

//     if(i>10 && i<20)
//     {
//         obj[i]="This is between 10 and 20";
//     }
//     arr1.push(obj);
// }


// console.log(arr1);




function cFunc(pr1,pr2,pr3,pr4)
{
    console.log("b",this);
    this[pr1]=pr2;
    this[pr3]=pr4;
    this.func=function(){console.log(10000000);};
    console.log("a",this);
    console.log("My object maker function was run");
    return 10;
}


 let ret = new cFunc("a",20,"b",30);
 let ret1 = new cFunc("a",20,"b",40);
//  console.log(ret.func);
//  console.log( ret.func=== ret1.func);

// arr1=['a','lll',90], arr2=[1,800,"tjjt"]; 

//  let k={
//   a: "tjjt",
//   lll:800,
//   90:1,
  
//  }
//  console.log(k);