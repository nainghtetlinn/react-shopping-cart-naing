import React, { useContext, useEffect } from 'react';

import logo from './images/logo.svg';
import cart from './images/icon-cart.svg';
import close from './images/icon-close.svg';
import deleteSVG from './images/icon-delete.svg';
import menu from './images/icon-menu.svg';
import minus from './images/icon-minus.svg';
import next from './images/icon-next.svg';
import plus from './images/icon-plus.svg';
import previous from './images/icon-previous.svg';

import avatar from './images/image-avatar.png';
import p1 from './images/image-product-1.jpg';
import p2 from './images/image-product-2.jpg';
import p3 from './images/image-product-3.jpg';
import p4 from './images/image-product-4.jpg';
import { useState } from 'react/cjs/react.development';

const svgs = {
  logo,
  cart,
  close,
  deleteSVG,
  menu,
  minus,
  next,
  plus,
  previous,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [item, setItem] = useState({
    name: 'Fall Limited Edition Sneakers',
    id: 1,
    description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
    durable rubber outer sole, they’ll withstand everything the weather can offer.`,
    price: 250,
    discount: 0.5,
    amount: 0,
    photos: [p1, p2, p3, p4],
  });

  const increase = () => {
    const newAmount = item.amount + 1;
    setItem({
      ...item,
      amount: newAmount,
    });
  };

  const decrease = () => {
    if (item.amount === 0) {
      return;
    } else {
      const newAmount = item.amount - 1;
      setItem({
        ...item,
        amount: newAmount,
      });
    }
  };

  const add = () => {
    if (item.amount > 0) {
      setCartItems([...cartItems, item]);
    }
    setItem({
      ...item,
      amount: 0,
    });
  };
  const remove = (ind) => {
    setCartItems(cartItems.filter((item, index) => index !== ind));
  };

  const getTotal = (preV, curV) => {
    return preV + curV.amount;
  };

  useEffect(() => {
    const totalAmount = cartItems.reduce(getTotal, 0);
    setTotal(totalAmount);
  }, [cartItems]);

  return (
    <AppContext.Provider
      value={{
        avatar,
        svgs,
        item,
        cartItems,
        total,
        increase,
        decrease,
        add,
        remove,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
