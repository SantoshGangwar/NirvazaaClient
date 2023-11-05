

import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])
  const [cartQuantity, setCartQuantity] = useState(0);

console.log("cartItems on context",cartItems);

  const addToCart = (item) => { 
    console.log("cartteim",cartItems)
    console.log("cartItems on context",item)
    
    const isItemInCart = cartItems.find((cartItem) => cartItem.product.product._id === item.product.product._id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
        cartItem.product.product._id === item.product.product._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }  
console.log("length" ,cartItems.length)
    setCartQuantity(cartItems.length); 
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => { 
    console.log("getsum",cartItems)
    return cartItems.reduce((total, item) => total + item.product.product.Price * item.quantity, 0);
  }; 

  const totalCartItem =()=>{
    return cartItems.length;
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal, 
        totalCartItem,
        cartQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};