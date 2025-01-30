import { useEffect, useState } from "react";
import ShopItemCard from "../../../components/shopItemsCard/shopItemCard";
import "./webshop.css";
import shoppingCartImg from '../../../assets/media/shopping.cart.png'



const Webshop = () => {
  
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);  //ez a kosárhoz van

  //locale storage-ból való visszahívás
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);
  //ezen cuccok mentése
  // useEffect(() => {
    
  //   localStorage.setItem("cart", JSON.stringify(cartItems));
  // }, [cartItems]);

  const toggleSidebar =()=> {
    setIsSidebarVisible(!isSidebarVisible);
  };

  //webshop működéséhez->
  const addToCart = (item) =>{                      
    setCartItems((prevItems)=> {

        const newCart = [...prevItems, item];
        localStorage.setItem("cart", JSON.stringify(newCart));

         return newCart;
    });
    console.log('Hozzáadva a kosárhoz');
    
  };
  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((_, i) => i !== index);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Frissítsd a Local Storage-t
      return updatedCart;
    });
    console.log("Eltávolítva a kosárból");
  };
  



  

  return (
    
    <div className="bg-img">
      <div className="webshop-layout">

            <div className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}>
              <div className="cart-title">
                <h2>Kosár</h2>
              </div>
              <div className="cart-items">
               {cartItems.length > 0 ? (
                cartItems.map((item, index) =>(
                  
                  <div key={index}>
                    <h3>{item.name}</h3>
                    <p>{item.pirce}</p>
                    <button onClick={() => removeFromCart(index)}>Eltávolítás</button>
                    <hr />
                  </div>
                  
                ))
                

              ) : (
                  <p>A kosár üres</p>
               )}
              </div>
            </div>
            <div className="container white-text-style">
                  
                  <div className="t-shirts container">
                    <h1>Merch</h1>
                    <h3><button  onClick={toggleSidebar}>
                            Kosár
                          <img src={shoppingCartImg} alt='Bevásárló kocsi' />
                          {cartItems.length > 0&& <span className="cart-items-counter">{cartItems.length}</span>}
                        </button></h3>
                      <ShopItemCard addToCart={addToCart} />
                      
                  </div>
                
                
            </div>
          </div>
      </div>
    
  );
};

export default Webshop;
