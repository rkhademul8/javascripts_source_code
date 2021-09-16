// const getValue=()=>{
//     const productInput=document.getElementById('product-input');
//     const priceInPut =document.getElementById('price-input');
//     const product =productInput.value;
//     const price =priceInPut.value;
//     if (!product) {
//         return
//     }
//     productInput.value='';
//     priceInPut.value='';
//     setCart(product,price)
//     displayCart();
// }

// const getcart=()=>{
//     const products = localStorage.getItem('product')
//     let cartobj;
//     if (products) {
//         cartobj=JSON.parse(products)
//     }
//     else{
//         cartobj=[];
//     }
//     return cartobj;
// }

// const setCart =(name1,name2)=>{
//     const cart= getcart();
// const hard ={name:name1,price:name2}
// cart.push(hard)
// const stringifield =JSON.stringify(cart)
// localStorage.setItem('product',stringifield)
// }

// const displayCart )=>{
//     const post =document.getElementById('ul')
//     post.textContent='';
//     const display = getcart();
//     display.forEach(carts => {
          
//         const li =document.createElement('li')
//         li.innerHTML=`${carts.name} ${carts.price}`
//         post.appendChild(li)
//     });
// }

// displayCart();




const addProduct=()=>{
    const get_name=document.getElementById('product-name');
    const name=get_name.value;
    const get_price=document.getElementById('product-price')
    const price=get_price.value
    get_name.value=''
    get_price.value=''
    // display
    displayProduct(name,price)
    addProductToCart(name,price)  
}
const displayProduct=(name,price)=>{

    const ul=document.getElementById('products')
    const li_1=document.createElement('li')
    const li_2=document.createElement('li')
    li_1.innerText=name
    li_2.innerText=price
    ul.appendChild(li_1)
    ul.appendChild(li_2)
}

const get_Cart=()=>{
    const cart=localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj=JSON.parse(cart)
    }
    else{
        cartObj=[]
    }
    return cartObj
}

const addProductToCart=(name,price)=>{
    const shoopingCart=get_Cart();
    const product_info={
        name:name,
        price:price,
    }
    shoopingCart.push(product_info)
    const cartStringField=JSON.stringify(shoopingCart)
    localStorage.setItem('cart',cartStringField)
}

const Display_All_Product=()=>{
    const array_value=get_Cart()
    for (const get_value of array_value) {
        displayProduct(get_value.name,get_value.price)
        
    }
}
Display_All_Product();