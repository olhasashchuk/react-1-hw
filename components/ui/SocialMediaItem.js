import Link from 'next/link';
import styles from './Footer.module.css'

export const SocialMediaItem = ({ url, title, icon }) => {
   return (
      <>
         <li>
            <Link href={url}> 
               {icon} 
               <span>{title}</span>
            </Link>
         </li>
      </>
   )
}
