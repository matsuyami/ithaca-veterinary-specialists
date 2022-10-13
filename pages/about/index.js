import { Header } from '../../components/header/Header';
import styles from './About.module.css';

export default function About(){
    return (
      <>
          <Header/>
          <section className={styles.banner} style={{ backgroundImage: `url(/images/wilderness_dog.jpg)`}}>
            <div className={styles.banner__info}>
              <h1 className={styles.banner__header}>About Us</h1>
              <div className={styles.banner__text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </div>
              <button className={styles.banner_button}>Contact</button>
            </div>
          </section>
      </>
    )
}