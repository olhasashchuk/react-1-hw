"use client"
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';
import socialMediaData from '@/data/socialMediaData';
import { SocialMediaItem } from './SocialMediaItem';

export const Footer = () => {
  const path = usePathname().split('?')[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
       <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {socialMediaData.map((item, index) => (
              <SocialMediaItem 
                key={`socialMediaItem-${index}`} 
                url={item.url}
                title={item.title} 
                icon={item.icon} 
              />
            ))
          }
        </ul>
      </div>
    </footer>
  );
}