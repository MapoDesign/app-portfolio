import './ProductCard.css';
import { Button } from '@material-ui/core';
import { useState } from 'react';

const ProductCard = (props) => {
    const [bought,setBought] =useState()

    const onClickOnButton =()=>{
        props.addToCart()
        setBought(true)
    }
    const onClickRemove =()=>{
        props.removefromCart()
        setBought(false)
    }

    return <div className="product-card">
        <p className="title">Prodotto</p>
        <p className="name">{props.title}</p>
        <p className="cost">Costo:{props.costAmount}{props.costCurrency}</p>
        {bought ? <Button onClick={onClickRemove}>Remove</Button> :<Button onClick={onClickOnButton}>Add</Button>}
        </div>
    }
export default ProductCard
  