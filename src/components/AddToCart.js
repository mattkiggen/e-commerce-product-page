import { useState } from 'react';
import CartIcon from './icons/CartIcon';
import styles from '../styles/AddToCart.module.scss';

export default function AddToCart() {
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = (TYPE) => {
    if (quantity === 0 && TYPE === 'DECREMENT') {
      return;
    }

    if (TYPE === 'INCREMENT') {
      setQuantity((prev) => {
        prev++;
        return setQuantity(prev);
      });
    } else {
      setQuantity((prev) => {
        prev--;
        return setQuantity(prev);
      });
    }
  };

  return (
    <div className={styles.addToCart}>
      <div className={styles.quantityInfo}>
        <input
          type='number'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          className={styles.plus}
          onClick={() => handleQuantity('INCREMENT')}>
          <img src='/images/icon-plus.svg' alt='Plus button' />
        </button>
        <button
          className={styles.minus}
          onClick={() => handleQuantity('DECREMENT')}>
          <img src='/images/icon-minus.svg' alt='Minus button' />
        </button>
      </div>
      <button className={styles.btn}>
        <CartIcon color='#fff' /> Add to cart
      </button>
    </div>
  );
}
