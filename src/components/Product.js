import styles from '../styles/Product.module.scss';

export default function Product() {
  return (
    <main className={styles.product}>
      <div className={styles.details}>
        <img
          src='/images/image-product-1.jpg'
          alt='Sneaker'
          className={styles.featuredImage}
        />
        <div className={styles.content}>
          <p className={styles.brand}>Sneaker Company</p>
          <h1>Fall Limited Edition Sneakers</h1>
          <p className={styles.description}>
            These low profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className={styles.priceInfo}>
            <div>
              <p className={styles.price}>$125.00</p>
              <p className={styles.discount}>50%</p>
            </div>
            <p className={styles.originalPrice}>$250.00</p>
          </div>
        </div>
      </div>
    </main>
  );
}
