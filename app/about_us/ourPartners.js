import styles from "../../components/cardOurPartners/cardOurPartners.module.css"
import OurPartnersData from "@/data/ourPartnersData";
import OurPartnersCard from "@/components/cardOurPartners/ourPartnersCard";


export default function OurPartners() { 
   return <>
      <p className={styles.ourPartnersSubtitle}>Our Partners</p>
      <h2 className={styles.ourPartnersTitle}>Who is our collaborator</h2>
      <p className={styles.ourPartnersText}>We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary.</p>
      <div className={styles.ourPartnersCards}>
         {OurPartnersData.map((card, index) => (
            <OurPartnersCard  
            key={index}
            logo={card.logo}
            />
         ))}
      </div>
   </>;
 }

 