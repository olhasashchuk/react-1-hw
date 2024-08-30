import styles from "../../components/cardOurPartners/cardOurPartners.module.css"
import ourPartnersData from "@/data/ourPartnersData";
import OurPartnersCard from "@/components/cardOurPartners/ourPartnersCard";


export default function OurPartners() { 
   return (
      <>
         <p className={styles.ourPartnersSubtitle}>Our Partners</p>
         <h2 className={styles.ourPartnersTitle}>Who is our collaborator</h2>
         <p className={styles.ourPartnersText}>We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary.</p>
         <div className={styles.ourPartnersCards}>
            {ourPartnersData.map((card, index) => (
               <OurPartnersCard  
               key={`ourPartnersItems-${index}`}
               logo={card.logo}
               />
            ))}
         </div>
      </>
   )
 }

 