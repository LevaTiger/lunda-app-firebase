import './shop-item-card.css'
import shoppingItems from '../../assets/txt/shoppinglist.json'
import { useState } from 'react';

const ShopItemCard = ({addToCart}) =>{



// const [addToCart, setAddToCart] = useState('');


// const webshopItems = shoppingItems.shirts;
// console.log(webshopItems)
// let shoppingCart = [];

// function handleClickAdd(buy) {
//     if (buy=== "buy") {
//         shoppingCart.push(webshopItems);
//         console.log(shoppingCart);
//     }
//     else {
//         console.log('error')
//     }
// }


const webshopItems = shoppingItems.shirts;


    return(
        <div className='card-layout'>
            {webshopItems.map((item, index)=>(
                <div className="card" key={index}>
                    <figure>
                        <img src={item.src} alt={item.name} />
                    </figure>
                    <h2>{item.name}</h2>
                    <p>Color: {item.color}</p>
                    <p>Size: {item.size}</p>
                    <h3>{item.pirce}</h3>
                    <button 
                    className='btn-style' 
                    id='cart' 
                    type='button'
                    onClick={()=> addToCart(item)} 
                   >Kosárba</button>
                </div>
            ))}
        </div>
    )
}

export default ShopItemCard;