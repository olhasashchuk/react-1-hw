import styles from './destination.module.css'
import { Button } from '../ui/Button'

export const PlanetCard = ({ 
   name, 
   thumbnail, 
   description, 
   isPlanetSelected, 
   onAddPlanetToWishlist, 
   onRemovePlanetToWishlist
   }) => {
   const handleOnclick = () => {
      isPlanetSelected ? onRemovePlanetToWishlist() : onAddPlanetToWishlist()  
   };
     
   return (
   <>
   <div className={styles.planetCard}>
      <img className={styles.planetThumbnail} src={thumbnail} alt={name} />
      <div className={styles.planetDescription}>
         <h2 className="textCapital">{name} {isPlanetSelected ? "- SELECTED" : ""}</h2>
         <p>{description}</p>
      </div>
      <Button 
         className="roundButton"
         onClick={handleOnclick}
         name = {isPlanetSelected ? "REMOVE" : "ADD PLANET"}
      />
      </div>
   </>
   )
}