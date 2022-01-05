import { useEffect } from 'react';
import gsap from 'gsap';
import styles from '../styles/SidebarMenu.module.scss';

export default function SidebarMenu({ items }) {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '#sidebarMenu',
      { width: 0 },
      {
        ease: 'elastic.out(1, 0.3)',
        duration: 1,
        width: '30rem',
      }
    );
  }, []);
  return (
    <div className={styles.background}>
      <div id='sidebarMenu' className={styles.sidebar}>
        {items.map((i) => {
          return (
            <a key={i.name} href={i.href}>
              {i.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
