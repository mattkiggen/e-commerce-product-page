import { useState } from 'react';
import Logo from './Logo';
import styles from '../styles/Navbar.module.scss';
import MenuIcon from './MenuIcon';
import CartIcon from './CartIcon';
import Avatar from './Avatar';
import SidebarMenu from './SidebarMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', name: 'Collections' },
    { href: '/', name: 'Men' },
    { href: '/', name: 'Women' },
    { href: '/', name: 'About' },
    { href: '/', name: 'Contact' },
  ];

  return (
    <header className={styles.navbar}>
      <nav>
        <div className={styles.left}>
          <button onClick={() => setIsOpen(!isOpen)} className={styles.toggle}>
            <MenuIcon isOpen={isOpen} />
          </button>
          <Logo />
          <div className={styles.desktopMenu}>
            {menuItems.map((i) => {
              return (
                <a key={i.key} href={i.href}>
                  {i.name}
                </a>
              );
            })}
          </div>
        </div>
        <div className={styles.right}>
          <button>
            <CartIcon />
          </button>
          <Avatar
            href='/#'
            imageSrc='/images/image-avatar.png'
            alt='Picture of me'
          />
        </div>
        {isOpen && <SidebarMenu items={menuItems} />}
      </nav>
    </header>
  );
}
