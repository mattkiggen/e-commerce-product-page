import { useState } from 'react';
import styles from '../styles/Carousel.module.scss';

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(images[0]);

  const handleChangeImage = (index) => {
    setCurrent(images[index]);
  };

  return (
    <div className={styles.carousel}>
      <img src={current} alt='Product image' className={styles.featured} />
      <div className={styles.preview}>
        {images.map((image, index) => {
          return (
            <div
              key={image}
              style={{ backgroundImage: `url(${image})` }}
              alt='Product image'
              className={
                images.indexOf(current) === index
                  ? styles.thumbnail + ' ' + styles.selected
                  : styles.thumbnail
              }
              onClick={() => handleChangeImage(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
