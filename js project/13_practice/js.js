// ব্রাউজার এবং জাভাস্ক্রিপ্ট রিলেটেড জিনিসগুলা প্রাকটিস করে ফেলো।  

// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন 
// সেকেন্ড পরে আউটপুট দেখাবে। 

// setTimeout(time,3500)

// function time(){
//     console.log("It take some time");
// }


// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ 
// করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই 
// রেজাল্টকে alert দিয়ে আউটপুট দেখাও 

    // let number=prompt("Enter the number");
    // let result=JSON.parse(number) +200;
    // alert(result);
   

// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর 
// লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন
//  href জিনিসটা কনসোল লগ করে দেখাও 

// const Permission=()=>{

//     let location=confirm("Are you interest to watch your web location")

//     if(location){
//         console.log(location.href='https://www.w3schools.com/jsref/met_win_settimeout.asp');
//     }
//     else{
//         alert("Sorry!! You can't watch");
//     }
   
// }
// Permission();


// ৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ 
// লাইনের মধ্যে লিখে ফেলো। 

// Cookies is nothing but it is a small text File, given id tags
// that are stored our computer's beowser directory. Cookies are created
// when we use our browser to visit a website hat uses cookies to keep 
// track of your movements within the site, help you resume where you
// left off, remember your registered login, theme selection,
// preferences, and other customization functions.


// ৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। 
// ইংরেজিতে। (নিজের মতো করে লিখবে )

// Local storage
// 1.It never expire
// 2.All window
// 3.Storage browser onley

//session storage
// 1.It expire when we close the tab
// 2.On Tab
// 3.Storage browser onley





// [হোম ওয়ার্ক] 

// ৬. জাভাস্ক্রিপ্ট এর কোড কিভাবে ব্রাউজারের মধ্যে রান করে। দরকার হলে গুগল 
// বা ইউটিউবে সার্চ দিয়ে একটু ভালো করে দেখে রাখো। 



// ৭. জাভাস্ক্রিপ্ট এর কোন কোন জিনিস asynchronous সেটার একটা লিষ্ট গুগলে 
// সার্চ দিয়ে বের করে ফেলো। এবং এই asynchronous বলতে কি বুঝায় সেটাও দেখে
// রাখো। 

// ৮. event loop লুপ কি জিনিস। এই রিলেটেড পুরা জিনিসটা আজকে অনেকেই 
// বুঝবে না। তাও আরেকবার দেখে রাখবে। 



// [অপশনাল]

// ৯. একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা 
// ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর 
// প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর
//  দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্
//  ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 





// ১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট 
// এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল
// স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে। 
