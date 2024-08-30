import styles from "./cardOurCrew.module.css"

export default function OurCrewCard({ image, position, name, description }) {
   return <div className={styles.ourCrewItem}>
      <div className={styles.ourCrewItemContainerImage}> 
         <img className={styles.ourCrewItemImage} src={image} alt={name} />
      </div>
      <h3 className={styles.ourCrewItemSubtitle}>{position}</h3>
      <p className={styles.ourCrewItemTitle}>{name}</p>
      <p>{description}</p>
   </div>
}
 