import { useState } from 'react';
import styles from '../styles/Carousel.module.scss';

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(images[0]);

  const handleChangeImage = (index) => {
    setCurrent(images[index]);
  };

  const handleNextImage = (type) => {
    const currentIndex = images.indexOf(current);

    let nextImg;
    if (type === 'next') {
      nextImg = images[currentIndex + 1];
    } else {
      nextImg = images[currentIndex - 1];
    }

    if (nextImg === undefined) return;

    setCurrent(nextImg);
  };

  return (
    <div className={styles.carousel}>
      <img src={current.src} alt={current.alt} className={styles.featured} />
      <div className={styles.preview}>
        {images.map((image, index) => {
          return (
            <div
              key={image}
              style={{ backgroundImage: `url(${image.src})` }}
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
      <div className={styles.controls}>
        <button onClick={() => handleNextImage('prev')}>
          <svg width='12' height='18' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M11 1 3 9l8 8'
              stroke='#1D2026'
              stroke-width='3'
              fill='none'
              fill-rule='evenodd'
            />
          </svg>
        </button>
        <button onClick={() => handleNextImage('next')}>
          <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='m2 1 8 8-8 8'
              stroke='#1D2026'
              stroke-width='3'
              fill='none'
              fill-rule='evenodd'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
