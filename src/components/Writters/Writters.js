import React, { useEffect, useState } from 'react';
import WritterRight from '../WritterRight/WritterRight';
import WritterLeft from '../WritterLeft/WritterLeft';


const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart]=useState([])
    const [name,setName]=useState([])
   
        useEffect(()=>{

        fetch(`./tools.JSON`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handleAddToCart=(product)=>{
        console.log(product.name)
        const newCart=[...cart,product]
        setCart(newCart)
        const newName=[...name,product.name]
        setName(newName)

        
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                
                <div className="grid">
                {
                    products.map(product=><Product product={product} key={product.key} name={product.name}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                    
                }
                </div>
             
            </div>
            <div className="cart-container">
                <Cart cart={cart} name={name} ></Cart>
                
            </div>
        </div>
    );
};

export default Shop;
// `https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON