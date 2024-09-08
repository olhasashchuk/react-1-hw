import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export const NavItem = ({ title, link, isActive }) => {
   const currentPath = usePathname()
   return (
      <>
      <li className={classNames(styles.navbarLinks, {
         [styles.isLinkActive]: link === currentPath,
       })}>
         <Link href={link}><b>01</b> {title}</Link>
      </li>
      </>
   )
}