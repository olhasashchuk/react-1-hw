import styles from "../../components/cardOurCrew/cardOurCrew.module.css"
import ourCrewData from "@/data/ourCrewData";
import OurCrewCard from "@/components/cardOurCrew/ourCrewCard";


export default function OurCrew() { 
   return (
      <>
         <p className={styles.ourCrewSubtitle}>Our crew</p>
         <h2 className={styles.ourCrewTitle}>Who we are</h2>
         <p className={styles.ourCrewText}>Our crew is the heart and soul of Galactica. We are a diverse team of seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting for all.</p>
         <div className={styles.ourCrewCards}>
            {ourCrewData.map((card, index) => (
               <OurCrewCard 
                  key={`ourCrewItems-${index}`} 
                  image={card.image}
                  position={card.position} 
                  name={card.name} 
                  description={card.description} 
               />
            ))}
         </div>
      </>
   );
 }

 