import React, { useEffect, useState } from 'react';
import WritterRight from '../WritterRight/WritterRight';
import WritterLeft from '../WritterLeft/WritterLeft';
import './Shop.css'

const Shop = () => {
    const [info,setInfo] = useState([])
    const [writter,setWritter]=useState([])
    const [name,setName]=useState([])
   
        useEffect(()=>{

        fetch(`./tools.JSON`)
        .then(res=>res.json())
        .then(data=>setInfo(data))
    },[])
    const handleAddToCart=(product)=>{
        console.log(product.name)
        const newCart=[...writter,product]
        setWritter(newCart)
        const newName=[...name,product.name]
        setName(newName)

        
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                
                <div className="grid">
                {
                   info.map(product=><WritterLeft product={product} key={product.key} name={product.name}
                        handleAddToCart={handleAddToCart}
                    ></WritterLeft>)
                    
                }
                </div>
             
            </div>
            <div className="cart-container">
                <WritterRight cart={writter} name={name} ></WritterRight>
                
            </div>
        </div>
    );
};

export default Shop;
// `https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON