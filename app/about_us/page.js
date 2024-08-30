import styles from './page.module.css';
import OurValues from './ourValues';
import OurCrew from './ourCrew';
import OurPartners from './ourPartners';

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <OurValues/>
        </section>
        <section className="card">
          <OurCrew/>
        </section>
        <section className="card">
          <OurPartners/>
        </section>
      </main>
    </div>
  );
}

export default Crew;
