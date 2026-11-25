let obj={
    Name:"sng1",
    Class:1,
    Speak: function()
    {
        console.log(`Hi my name is  and who are you ?`);
        console.log(this.Name);
    }
}


obj.Speak.call(obj2);

let obj2={}
function printUser(name,cls)
{
   console.log(this.Name);
}

printUser.call({Name:"KK",Class:9});


let arr =[{Name:"A",class:4, printD:function(){c}},{Name:"AB",class:5,printD:function(){c}},{Name:"ABC",class:6,printD:function(){c}},{Name:"ABBB",class:14},{Name:"LLLLA",class:40}] 


// console.log(obj.Speak);


// // this ->  This keyword contain context of the current object for which function is called; 
// obj.Speak();


