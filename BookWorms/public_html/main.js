let carts=document.querySelectorAll('.btnc');


let products = [
    {
        name: "Moner moto mon",
        price: 154,
        inCart:0
        
    },
    {
        name: "Ratnagarbha",
        
        price: 200,
        inCart:0
        
    },
     {
        name: "Badshah Namdar",
        price: 200,
        inCart:0
        
    },
     {
        name: "Eki Kando",
        price: 250,
        inCart:0
        
    }
    
    
    
    
    
];

for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent=productNumbers;
    }
}


function cartNumbers(product){
  
    let productNumbers=localStorage.getItem('cartNumbers');   
    productNumbers =parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers+1);
        document.querySelector('.cart span').textContent=productNumbers+1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent=1;
    }
    
    setItems(product);
}

function setItem(product){
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    
    if(cartItems!=null){
        if(cartItems[products.name]==undefined){
            cartItems={
                        ...cartItems,
                        [product.name]: product
            };
        }
        
        cartItems[product.name].inCart += 1;
    }
    else{
         product.inCart=1;
         cartItems={
         [product.name]:product
        };
        
    }
   
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
    
}

function totalCost(product){
    let cartCost=localStorage.getItem('totalCost');

    if(cartCost!=null){
        cartCost=parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost+product.price);
    } else{
    localStorage.setItem("totalCost", product.price);
    }
}

function displayCart(){
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    let productContainer=document.querySelector(".products");
    if(cartItems && productContainer){
        
        productContainer.innerHTML ='';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML += `
             <div class="products">
              <ion-icon name="close-circle-outline"></ion-icon>
              <img src="/images/${item.name}.jpg">
              <span>${item.name}</span>
            

        `;
        });
        
    }
}




onLoadCartNumbers();
displayCart();