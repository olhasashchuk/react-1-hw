import styles from './destination.module.css'
import { Button } from '../ui/Button'
export const PlanetWishlistItem = ({
   name,
   onRemove,
   thumbnail,
 }) => {
   return (
     <div className={styles.wishlistItem}>
      <img className={styles.wishlistItemThumbnail} src={thumbnail} alt="" />
      <b className="textCapital">{name}</b>
      <Button
        onClick={onRemove}
        name = 'remove'
      />
     </div>
   );
 }