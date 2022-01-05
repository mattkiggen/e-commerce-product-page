import styles from '../styles/Product.module.scss';

export default function Product() {
  return (
    <main className={styles.product}>
      <img
        src='/images/image-product-1.jpg'
        alt='Sneaker'
        className={styles.featuredImage}
      />
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <p>$125.00</p>
    </main>
  );
}
