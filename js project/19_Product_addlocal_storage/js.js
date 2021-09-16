
const addProduct=()=>{
    const get_product=document.getElementById('product-name')
    const name=get_product.value
    get_product.value=''
    const get_price=document.getElementById('product-price')
    const price=get_price.value
    get_price.value=''
    //display
    displayProduct(name,price)
    addProductTOcart(name,price)
}




const get_cart=()=>{
    const cart=localStorage.getItem('cart');
    let carObj;
    if(cart){
        carObj=JSON.parse(cart)
    }
    else{
        carObj=[]
    }
    return carObj         
}

const addProductTOcart=(name,price)=>{
    const shoopingCart=get_cart()
    const product_info={
        name:name,
        price:price
    }
    shoopingCart.push(product_info)
    const cartStringField=JSON.stringify(shoopingCart)
    localStorage.setItem('cart',cartStringField)
}



const displayProduct=(name,price)=>{
    const ul=document.getElementById('products')
    ul.textContent=''
    const display=get_cart()
    for (const get_value of display) {
        
        const li=document.createElement('li')
        li.innerHTML=`Product Name:${get_value.name} <br> product Price: ${get_value.price}`
        ul.appendChild(li)
    }

    // const li_1=document.createElement('li')
    // const li_2=document.createElement('li')
    // li_1.innerText=name
    // li_2.innerText=price
    // ul.appendChild(li_1)
    // ul.appendChild(li_2)

}
displayProduct();


// const display_All_product=()=>{
//     const array_value=get_cart();
//     for (const get_value of array_value) {
//         displayProduct(get_value.name,get_value.price)
//     }
// }

// display_All_product();