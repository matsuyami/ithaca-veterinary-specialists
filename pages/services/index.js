import Head from 'next/head'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { Service } from '../../components/service/Service'
import { Hero } from '../../components/hero/Hero'
import styles from './Services.module.css'
import { fetchServices } from '../../utils/fetchServices'

export default function Services({services}){
  const buttonOptions = {
    bg: 'var(--blue)',
    hoverColor: 'var(--primary-clr)',
    url: '/contact'
  }

  console.log(services)

  return(
    <div> 
      <Head>
        <title>Ithaca Veterinary Specialists | Services </title> 
      </Head>
      <Header/>
      <Hero title='Our Team' subHeading='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' 
      imageUrl='/images/couch-dog.jpg' backgroundPos='center' buttonOptions={buttonOptions}/>  
      <section className={styles.servicesInfo}>
        <h2 className={styles.servicesInfo__header}> Lorem la ipsum le dolor sit ame </h2>
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
        <div className={styles.servicesInfo__contentWrapper}>
          <div className={styles.servicesInfo__content}> 
            <div className={styles.servicesInfo__list}>
              {services && 
                services
                  .slice(0, services.length / 2 + 1)
                  .map(data => (
                  <Service key={data._id} description={data.description}>{data.name}</Service>
                ))
              }
            </div>
          </div>
          <div className={styles.servicesInfo__content}>
            <div className={styles.servicesInfo__list}>
              {services && 
                services
                  .slice(services.length / 2 + 1, services.length)
                  .map(data => (
                  <Service key={data._id} description={data.description}>{data.name}</Service>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}


export async function getStaticProps() {
  const services = await fetchServices()
  return {
    props: {
      services: services 
    }
  }
}
