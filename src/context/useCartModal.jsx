import { createContext, useState } from "react";

export const useCartModal = createContext();

export default (props) => {
  const [cartProduct, setCartProduct] = useState([]);

  const addCartProducts = (product) => {
    if (cartProduct.length === 0) {
      return setCartProduct([...cartProduct, product]);
    }

    setCartProduct(
      cartProduct.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + product.quantity };
        } else {
          return item;
        }
      })
    );
  };

  const deleteCartProducts = (id) => {
    setCartProduct(cartProduct.filter((item) => item.id !== id));
  };

  const totalQuantityProducts = cartProduct.reduce(
    (acc, current) => current.quantity + acc,
    0
  );

  return (
    <useCartModal.Provider
      value={{
        addCartProducts,
        deleteCartProducts,
        cartProduct,
        totalQuantityProducts,
      }}
    >
      {props.children}
    </useCartModal.Provider>
  );
};
