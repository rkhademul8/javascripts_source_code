
// 1. How to use object

// student={
//     name:'Khademul',
//     id:17103335,
//     age:24
// }
// console.log(student.age);


//2. How to use function and object


function Student(name,age,id){
    this.name=name,
    this.age=age,
    this.id=id,

    console.log(`My name is ${name}.\n My age `+age+` \n My id is ${id} `);
   
}
let s1=new Student('Khademul',12,17103335)