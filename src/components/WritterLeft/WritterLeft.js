
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './WritterLeft.css'


const Product = (props) => {
    
    const {name,img,value,birth}=props.product
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
          <img src={img} alt=""width="150px" height="150px" /> 
          <div>
            <h4>Name: {name}</h4> 
            <p>Birth: {birth}</p>
           
            <p><small>Writter Book Value :{value}</small></p>
            <button onClick={()=> props.handleAddToCart(props.product)} className="btn-regular">{element} add writter</button>

          </div>
        </div>
    );
};

export default Product;