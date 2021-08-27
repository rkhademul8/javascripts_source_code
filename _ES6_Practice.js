
// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা 
// তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে
//  ভেরিয়েবল ডিক্লেয়ার করে ফেলো।


// const name="Apple"
// let age=10;
// console.log(name);
// console.log(age);

// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর 
// মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে 
// উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

// let name1='Ashu';
// let name2='Sohan';

// let object={
//     name:"Raihan",
//     id:1713335,
// }

// console.log(`The first person name :`+name1+` and second person name `+name2+``);
// console.log(`${object.name} and ${object.id}`);





// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি 
// কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 

    // const result=(num)=>{
    //     console.log(num/5);
    // }
    // result(10);


// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। 
// প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। 
// ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো  


// const arrowfunction=(num1,num2)=>{
//     let number1=num1+2;
//     let number2=num2+2;
//     let multiply=number1*number2;
//     return multiply;
// }

// console.log(arrowfunction(1,1));


// const arrowfunction=(num1,num2)=>{
//     let number1=num1+2;
//     let number2=num2+2;
//     let multiply=number1*number2;
//     return multiply;
// }
// let num1=1;
// let num2=1
// console.log(arrowfunction(num1,num2));


// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে 
// তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

// let arrowfunction =(num1,num2,num3)=>{
//     let multiply=num1*num2*num3;
//     return multiply;
// }
// console.log(arrowfunction(1,2,1));


// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা 
// লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। 
// ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

// const arrowfunction=(num1,num2)=>{
//     let number1=num1+2;
//     let number2=num2+2;
//     let multiply=number1*number2;
//     return multiply
// }

// let num1=1;
// let num2=1;
// console.log(arrowfunction(num1,num2));


// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। 
// প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে
//  হবে। 

// let number=[1,2,3]

// const arrowfunctiuon=number.map(num=>num*5)
//     console.log(arrowfunctiuon);

// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা 
// বের করে নিয়ে আসার জন্য filter ইউজ করো 

// let number=[1,2,3,4]

// const arrowfunction=number.filter(num=>num%2!=0)
// console.log(arrowfunction);


// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ 
// টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 


// let obj=[
//     {name:'Mobile',price:5000},
//     {name:'Laptop',price:2000},
// ]

// const arrowfunction=obj.find(Price=>Price.price==5000)
// console.log(arrowfunction);


// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার 
// জন্য destructuring ইউজ করো। 

// const developer={
//         font_end:{
//         first:'html',
//         second:'css',
//         third:'js'
//         }   
// }
// const {font_end}=developer
// console.log(font_end.second);

// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর 
// উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

// let array=[1,2,3,4] ;
// const [first,second,third] =array
// console.log(third);

// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে 
// সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট 
// ভ্যালু থাকবে। সেটা হবে ৭। 

const arrowfunction=(num1,num2,num3=7)=>{

    return(num1+num2+num3);
}
console.log(arrowfunction(1,2));


// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট 
// থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা 
// অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা 
// অবজেক্ট )

// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। 
// সেটা একটু প্রাকটিস করো। 
