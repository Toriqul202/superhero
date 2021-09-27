import React from 'react';
import './WritterRight.css'




let Cart = (props) => {
    const {cart,name}=props
   
    let total=0;
    
    for(const product of cart){
        total=total+product.value;
      
    }
  
    return (
        <div className="cart">
           
           <h3>Writters Added: {props.cart.length} </h3>
           <h3>Total Book  Value: {total}</h3>
           <ul>
             Name:{name}<br/>
           </ul>
          
        </div>
    );
};

export default Cart;