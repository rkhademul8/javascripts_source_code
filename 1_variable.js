
// There are three type of variable in js var,let and const 


// This the publick key 
var name="Khademul";
console.log(name);

// This let keyword we can use for update the variable value
let number1=5;
number1=10
console.log(number1);

// we can not change the variable value this is like constant 
const id=17103335;
console.log(id);

// Simple addition...

var num1=10;
var num2=10;
var sum=num1+num2;

console.log("The sum is:"+sum)

// Local variable

function local(){
    var num="Khademul";
    console.log(num);
}
local()

//Global variable

let car_name='Volvo'

function myCar(){
    console.log(car_name);
}
myCar();


// HOw to use template string. There are two way to use template string

1. 


// let name= 'Khademul'
// console.log(`My name is `+name+` `);

2. 
let computer='Apple'

console.log(`This is ${computer} `);