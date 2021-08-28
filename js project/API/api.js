
// Object convert string and again object using JSON

// const object={
//     name:'Khademul',
//     city:'Dhaka',
//     id:17103335,
    
    
// }

// const data=JSON.stringify(object)
// console.log(data)
// const obj= JSON.parse(data)
// console.log(obj);




// 1. How to fetch data from server 

// function getdtata(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(convert=>convert.json())
//     .then(output=> console.log(output))
// }
// getdtata()


// 2. How to display data using object
// function getdata(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(convert=>convert.json())
//     .then(output=>
//         console.log(output[1].name,output[2].name)

//     )
// }

// getdata();

// 3. Using Button To get data from server

// function getUser(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then(data=>displayUser(data))
// }


// function displayUser(userInfo){
//     console.log(userInfo[0].username);
// }


// 4. For of loop to to get individual data

// function getUser(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then(data=>displayUser(data))
// }

// function displayUser(userInfo){
//     for (const user of userInfo) {
//         console.log(user.name);
//         console.log(user.username);
//     }
    
// }

// 5.Create html tag inslide the tag we can push server data

// function getUser(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then(data=>displayUser(data))
// }

// function displayUser(userInfo){
//     const ul=document.getElementById('userName');
//     for (const user of userInfo) {
//         const li=document.createElement('li');
//         li.innerText=user.name;
//         ul.appendChild(li);     
//     }    
// }


// 6.

// function getUser(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res=>res.json())
//     .then(data=>displayPost(data))
// }

// function displayPost(posts){
//     const parent=document.getElementById('parentPost');
//     for (const post of posts) {
//         const div=document.createElement('div');
//         div.classList.add('post');
//         // div.style.background='red';
//         div.innerHTML=`
//         <h3>${post.title}</h3>
//         <p>${post.body}</p>
//         `
//         parent.appendChild(div)    
//     }    
// }