import styles from "./cardOurPartners.module.css"

export default function OurPartnersCard({ logo }) {
   return <>
      <div>
         <img className={styles.ourPartnersItemImage} src={logo} alt='our partner' />
      </div>
   </>
}
 