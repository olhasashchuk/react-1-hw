import styles from "./cardOurValue.module.css";

export default function OurValueCard({ title, subtitle, text }) {
   return <>
      <div className={styles.ourValueItem}>
         <h3 className={styles.ourValueItemTitle}>{title}</h3>
         <p className={styles.ourValueItemSubtitle}>{subtitle}</p>
         <p>{text}</p>
      </div>
   </>
}

