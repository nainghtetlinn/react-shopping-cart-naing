import { useState } from 'react/cjs/react.development';
import { useGlobalContext } from '../context';
import './body.css';

const Body = () => {
  const [showPhoto, setShowPhoto] = useState(0);
  const { item, svgs, increase, decrease, add } = useGlobalContext();
  const { previous, next, minus, plus, cart } = svgs;
  const [imgNum, setImgNum] = useState(0);
  const { name, id, description, price, discount, amount, photos } = item;
  const disPrice = price * discount;

  const prevFunc = (e) => {
    e.preventDefault();
    imgNum === 0 ? setImgNum(photos.length - 1) : setImgNum((p) => p - 1);
  };
  const nextFunc = (e) => {
    e.preventDefault();
    imgNum === photos.length - 1 ? setImgNum(0) : setImgNum((p) => p + 1);
  };

  return (
    <main>
      <section className="img-product">
        <button className="prev-btn" onClick={prevFunc}>
          <img src={previous} alt="previous-btn" />
        </button>
        <article className="hero-container df jc-center ai-center">
          <img src={photos[imgNum]} alt="hero-img" className="hero" />
        </article>
        <button className="next-btn" onClick={nextFunc}>
          <img src={next} alt="next-btn" />
        </button>
      </section>
      <section className="lg-img-product">
        <div className="hero-img-wrapper">
          <img src={photos[showPhoto]} alt="hero img" className="hero-img" />
        </div>
        <div className="template-img-container">
          {photos.map((img, index) => {
            return (
              <div
                className="tem-img"
                key={index}
                onClick={() => setShowPhoto(index)}
              >
                <img src={img} alt="template-image" />
              </div>
            );
          })}
        </div>
      </section>
      <section className="about-product">
        <h4>Sneaker Company</h4>
        <h2 className="name">{name}</h2>
        <p>{description}</p>
        <article className="price-container df jc-between ai-center">
          <h2>
            ${disPrice.toFixed(2)}{' '}
            <span className="discount">{discount * 100}%</span>
          </h2>
          <h4 className="price">${price.toFixed(2)}</h4>
        </article>
        <article className="amount-container">
          <div className="df jc-between ai-center">
            <button className="minus-btn cursor" onClick={() => decrease()}>
              <img src={minus} alt="minus-btn" />
            </button>
            <div>{amount}</div>
            <button className="plus-btn cursor" onClick={() => increase()}>
              <img src={plus} alt="plus-btn" />
            </button>
          </div>
          <button
            className="add-cart df ai-center jc-center cursor"
            onClick={add}
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fillRule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </article>
      </section>
    </main>
  );
};

export default Body;
