import styles from '@/app/nasa_collaboration/page.module.css'

export const RoverPhoto = ({
   src,
   date,
   roverName,
 }) => {
   return (
     <>
      <h3>{roverName}</h3>
      <p>Date {date}</p>
      <img className={styles.nasaPicOfTheDayImg} src={src} alt={roverName} />
     </>
   );
 }