import { Button } from '../../components/button/Button';
import { Footer } from '../../components/footer/Footer';
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
              <Button url='/contact' backgroundColor={'var(--blue)'} hoverColor={'var(--primary-clr)'}>Contact</Button>
            </div>
          </section>
          <section className={styles.aboutInfo}>
            <h2 className={styles.aboutInfo__header}> Lorem la ipsum le dolor sit ame </h2>
            <div className={styles.aboutInfo__content}> 
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet eros sodales, ultrices ante et, 
                vulputate nulla. Cras ultricies velit erat, vel faucibus justo iaculis sit amet. Integer ac lectus ut risus 
                rhoncus convallis. In purus dolor, facilisis nec ex eget, pulvinar rutrum mi. Donec blandit turpis sed mattis ullamcorper. 
                Nunc mollis risus et erat suscipit, eget fermentum felis cursus. Quisque lacus purus, venenatis sed justo id, 
                tristique condimentum arcu. Proin placerat lorem metus, quis venenatis sapien mattis consectetur. Duis egestas consectetur 
                diam, ac mattis purus interdum mattis. Suspendisse eu mauris vitae tellus interdum pellentesque. Curabitur 
                bibendum, metus ac faucibus dapibus, arcu lectus pretium odio, non iaculis nulla 
                felis id dolor. Vivamus sit amet hendrerit arcu. Pellentesque vestibulum nec lacus ac porta. Nam maximus turpis sit amet mollis egestas.
              </p>
              <p>
                Aenean mauris sem, commodo eu rutrum id, ultrices in arcu. Integer nec velit augue. Phasellus vel feugiat diam. Duis ac 
                sodales dui. Donec cursus diam commodo felis aliquam luctus vel pellentesque orci. Fusce ut lobortis augue. Fusce pretium 
                fringilla erat. Donec leo orci, molestie non lorem at, commodo efficitur ante. Nam sagittis ornare mauris eu semper. 
              </p>
              <p>
              Integer et metus hendrerit, tempor nibh viverra tellus. Curabitur tristique 
              euismod neque, non volutpat massa dignissim elementum. Cras gravida augue dui, eget 
              vestibulum metus convallis eu. Sed egestas sapien facilisis nibh gravida, in mollis ligula egestas.
              Suspendisse facilisis finibus felis, vitae mattis turpis blandit a. Nunc ut condimentum lorem. Quisque commodo aliquam dolor, 
              id mollis augue faucibus sit amet. Nunc porta turpis et nisl maximus cursus. Ut posuere enim ex, eu faucibus elit mollis sed. 
              In nec fermentum nisi. Nulla viverra faucibus nunc. Sed ut ante eu felis ultricies placerat.
              </p>
            </div>
          </section>
          <Footer/>
      </>
    )
}
