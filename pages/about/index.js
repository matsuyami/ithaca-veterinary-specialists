import Head from 'next/head';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { Hero } from '../../components/hero/Hero';
import styles from './About.module.css';

export default function About(){
    const buttonOptions = {
      bg: 'var(--blue)',
      hoverColor: 'var(--primary-clr)',
      url: '/contact'
    }
    return (
      <>
          <Head>
            <title>Ithaca Veterinary Specialists | About </title> 
          </Head>
          <Header/>
          <Hero title='About Us' subHeading='Lorem, ipsum dolor sit amet consectetur adipisicing elit. '
                imageUrl='/images/wilderness_dog.jpg' buttonOptions={buttonOptions}/>
          <section className={styles.aboutInfo}>
            <h2 className={styles.aboutInfo__header}> Lorem la ipsum le dolor sit ame </h2>
            <div className={styles.aboutInfo__content}> 
              <p>
                euismod neque, non volutpat massa dignissim elementum. Cras gravida augue dui, eget vestibulum metus convallis eu. Sed egestas sapien facilisis nibh gravida, in mollis ligula egestas.
                Suspendisse facilisis finibus felis, vitae mattis turpis blandit a. Nunc ut condimentum lorem. Quisque commodo aliquam dolor, 
                id mollis augue faucibus sit amet. Nunc porta turpis et nisl maximus cursus. Ut posuere enim ex, eu faucibus elit mollis sed. 
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
