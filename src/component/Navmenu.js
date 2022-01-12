import { useState } from 'react';
import { useGlobalContext } from '../context';
import Cart from './Cart';
import './navmenu.css';

const Navmenu = () => {
  const { svgs, avatar, cartItem, total } = useGlobalContext();
  const { logo, menu, cart, close } = svgs;

  const [openSidebar, setOpenSidebar] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const click = (e) => {
    console.log(e.target);
  };

  return (
    <nav className="df ai-center jc-between">
      <section
        className={
          openSidebar ? 'nav-links-section visible' : 'nav-links-section'
        }
      >
        <div className="shade" onClick={() => setOpenSidebar(false)}></div>
        <div className="nav-links">
          <div className="cursor close" onClick={() => setOpenSidebar(false)}>
            <img src={close} alt="close" />
          </div>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </section>
      <section className="logo-section df ai-center">
        <div
          className="hambargar cursor df"
          onClick={() => {
            setOpenSidebar(true);
            setOpenCart(false);
          }}
        >
          <img src={menu} alt="menu" />
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </section>

      <section className="cart-profile-section df ai-center">
        <div className="cart-wrapper cursor">
          <div className="cart" onClick={() => setOpenCart(!openCart)}>
            <img src={cart} alt="cart" />
            <div className="cart-total">{total !== 0 ? total : ''}</div>
          </div>
          {openCart && <Cart />}
        </div>
        <div className="profile">
          <img src={avatar} alt="avatar" width={40} />
        </div>
      </section>
    </nav>
  );
};

export default Navmenu;
