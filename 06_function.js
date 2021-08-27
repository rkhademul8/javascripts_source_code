
// 1.How to use function

// function add(){
//     let num1=5;
//     let num2=5;
//     let result=num1+num2;
//     console.log(result);
// }
// add()

// 2.How to use return inside the function

// function multiply(){
//     let num1=5;
//     let num2=5;
//     let result=num1*num2;
//     return result;
// }
// let display=multiply()
// console.log(display);

// also use this way
// console.log(multiply());

//3. How to use parameter 

// function div(num1,num2){
//     let result=num1/num2;
//     return result
// }
// console.log(div(10,5));


//  4. Prime number findout
function prime(number){
    if(number==1){
        console.log("It is not prime number");
    }
    else{
        for(var x=2;x<number;x++){
            if(number%x==0){
                var b=1;
                break;
            }
        }
        if(b==1){
            console.log("It is not prime number");
        }

        else{
            console.log("Prime number");
        }        
    } 
}
prime(11);


