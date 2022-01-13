import styles from '../styles/Product.module.scss';
import AddToCart from './AddToCart';
import Carousel from './Carousel';

export default function Product() {
  const images = [
    { src: '/images/image-product-1.jpg', alt: 'some alt text 1' },
    { src: '/images/image-product-2.jpg', alt: 'some alt text 2' },
    { src: '/images/image-product-3.jpg', alt: 'some alt text 3' },
    { src: '/images/image-product-4.jpg', alt: 'some alt text 4' },
  ];

  return (
    <main className={styles.product}>
      <div className={styles.details}>
        <Carousel images={images} />
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
          <AddToCart />
        </div>
      </div>
    </main>
  );
}
