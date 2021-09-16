
const addProduct=()=>{
    const getValue=document.getElementById('product-name');
    const name=getValue.value;
    //display products
    displayProduct(name);
    // local storage
    addProductToCart(name);
    getValue.value=''
}


const displayProduct=(name)=>{
    const ul=document.getElementById('products');
    const li=document.createElement('li');
    li.innerText=name;
    ul.appendChild(li);
}

const getCart=()=>{
    const cart=localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj=JSON.parse(cart);
    }
    else{
        cartObj={};
    }
    return cartObj
}

const addProductToCart=name=>{
    const shoopingCart=getCart();
    if(shoopingCart[name]){
        shoopingCart[name]+=1;
    }
    else{
        shoopingCart[name]=1
    }
    const cartStringField=JSON.stringify(shoopingCart)
    localStorage.setItem('cart',cartStringField)
}

