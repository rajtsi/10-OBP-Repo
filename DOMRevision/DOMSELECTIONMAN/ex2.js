let students = document.querySelectorAll('.student');
console.log(students);
console.log(students.length);

 students.forEach(function(e){
   console.log(e.textContent);
   if(e.textContent.length>5)
         e.style.color='red';
        else
                     e.style.color='green';

            
    
})

let student1=students[0];

console.dir(student1.style);

student1.style.borderRadius="10%"
student1.style.color="green"

students[3].style.backgroundColor="blue";