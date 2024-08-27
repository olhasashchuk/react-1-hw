import styles from "../../components/cardOurValues/cardOurValue.module.css"
import OurValueData from "@/data/ourValueData";
import OurValueCard from "@/components/cardOurValues/ourValues";

export default function OurValues() { 
   return <>
      <p className={styles.ourValueSubtitle}>Our values</p>
      <h2 className={styles.ourValueTitle}>Rules to live by</h2>
      <div className={styles.ourValueCards}>
         {OurValueData.map((card, index) => (
            <OurValueCard 
               key={index} 
               title={card.title} 
               subtitle={card.subtitle} 
               text={card.text} 
            />
         ))}
      </div>
   </>;
 }