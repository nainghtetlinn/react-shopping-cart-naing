import { useGlobalContext } from '../context';
import './cart.css';

const NoItem = () => {
  return (
    <div className="no-item df jc-center ai-center">
      <h4>Your cart is empty.</h4>
    </div>
  );
};

const CartItem = () => {
  const { svgs, cartItems, remove } = useGlobalContext();
  const { deleteSVG } = svgs;
  return (
    <section className="item-container">
      {cartItems.map((item, index) => {
        const { name, price, amount, discount, photos } = item;
        const discountPrice = price * discount;
        const totalPrice = amount * discountPrice;
        return (
          <article key={index} className="df jc-between ai-center">
            <div className="item-img">
              <img src={photos[0]} alt="cart-item-photo" />
            </div>
            <div className="about-item df jc-between">
              <p>{name}</p>
              <p>
                {`$${discountPrice.toFixed(2)} x ${amount} = `}{' '}
                <span className="total-price">${totalPrice.toFixed(2)}</span>
              </p>
            </div>
            <div onClick={() => remove(index)}>
              <img src={deleteSVG} alt="remove" />
            </div>
          </article>
        );
      })}
      <button className="checkout">Checkout</button>
    </section>
  );
};

const Cart = () => {
  const { cartItems } = useGlobalContext();
  return (
    <section className="cart-container">
      <h4>Cart</h4>
      {cartItems.length === 0 ? <NoItem /> : <CartItem />}
    </section>
  );
};
export default Cart;
