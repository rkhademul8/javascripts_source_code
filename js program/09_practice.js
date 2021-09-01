



// swap variable
// let a=5;
// let b=10;
// let c=15;
// let d=20;

//  let e=a;
//  let f=b
//  a=d;
//  b=c;
//  c=f;
//  d=e;

 
// console.log(a,b,c,d);



// Date 8/8/2021 --- practice 

// Q:1 varaivle declaration

// let name="Md. Khademul Islam";
// console.log(name,typeof(name));

// let number=10;
// console.log(number,typeof(number));

// let bool=true;
// console.log(typeof(bool));

// Q:2 How to update varaible value

// let name= "hello";
//  name="Khademul";
//  const number=10
//  console.log(name,number);

// Q:3 Calculation of  +,-,*,/,%

// let number1=10;
// let number2=5;

//  add=number1+number2;
//  sub=number1-number2;
//  mullti=number1*number2;
//  div=number1/number2;
//  modules=number1%number2;

//  console.log("Sum is:",add);
//  console.log("Subtraction is:",sub);
//  console.log("Multiplication is:",mullti);
//  console.log("Division is:",div);
//  console.log("Modules is:",modules);


// Q:4 comparasion variable <,>,==,!=,<=,>=

// let number1=5;
// let number2=5;

// if(number1>number2){
//     console.log("Number1 is grater than number2");
// }
// else if(number1<number2){
//     console.log("Number2 is smaller than number1");
// }

// else if(number1==number2){
//     console.log("Number is equal");
// }

// else if(number1!=number2){
//     console.log("Number is not equal");
// }

// else if(number1<=number2){
//     console.log("Number1 is smaler/equal number2");
// }
// else{
//     console.log("Number1 is grater/equal number2");
// }

// Q:5 Leap year or not leap year 

// let year=2021

// if ((year%4==0 && year%100!=0) || year%400==0){
//     console.log("This is leap year");
// }

// else{
//     console.log("Not  leap year");
// }

// Q:6 Using while loop to print odd 7 to 19

// let i=7;

// while(i<=19){
//     if(i%2==0){
//         console.log(i);
//     }
//     else{
//         console.log("Odd number is:",i)
//     }
//     i++;
// }





// Q:7 array position update 


// let a =[1,2,3,4,5];
// console.log(a.length);
// a[4]=10;
// console.log(a);

// let sum=a[3]+a[4];
// console.log('The sum is:',sum)
// a.pop()
// console.log(a);


// Q:8 array for loop 
// let array =[1,2,3,4,5];

// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }


// Q:9 array for of loop 
// let array =[1,2,3,4,5];
// for(const elemet of array){
//     console.log(elemet);
// }



// Q:10 print grater than 80 number

// let array=[80,81,82]

// for(const element of array){
//     if(element>80)
//     console.log(element);
// }

// Q:11   multiply 3 number using return function


// function multiplication(num1,num2,num3){

//     let mul=num1*num2*num3;
//     return mul;

// }

// var result=multiplication(5,5,1)
// console.log( "The multiplication is:",result)

//Q:11 object declare


//Q:12 Feet to inch convert

// function feetToinch(feet){
//     let inch=feet*12;
//     return inch;
// }

// let result=feetToinch(5);
// console.log(result) ;


// Q:12 centemeter to meeter convert

// function centeTomeeter(cemtemeter){
//     let meeter=cemtemeter/100;
//     return meeter;
// }

// let result=centeTomeeter(100);
// console.log(result);


// Q:12 Total Book page calculation

// function paperRequirements(bangla,english,math){
//     let bangla_page=100;
//     let english_page=200;
//     let math_page=300;

//     let total_page=(bangla*bangla_page)+(english*english_page)+(math*math_page)
//     return total_page
// }

// let result=paperRequirements(2,2,3);

// console.log("Total book page:",result);


// Q:13 Find-out bigger lenght name


function bestfriend(array){
    let big_string='';
    for(const element of array){
        if(element.length> big_string.length){
            big_string=element
        }
    }
    return big_string;

}

const friend_name=['Nipa','khademul','akhdsfhjjhfhdjfhdhjfhnjdhf']
let result= bestfriend(friend_name);
console.log(result)