import Head from 'next/head'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header/>
        <main>
          <div className={styles.hero}>
            <video className={styles.hero__video} preload='none' playsInline='' autoPlay='autoplay' muted={true} loop={true}>
              <source src="/video/dog_grass.mp4" type="video/mp4"/>
              <source src="/video/dog_grass.webm" type="video/webm"/>
              Your browser does not support this video file.
            </video>
          </div>

        <div className={styles.surgery}>Services</div>
        <div className={styles.services}>
          <div className={styles.service}>
            <svg viewBox="0 0 24 24">
              <path 
              d="M8,14A3,3 0 0,1 5,17A3,3 0 0,1 2,14C2,13.23 2.29,12.53 2.76,12C2.29,11.47 2,10.77 2,10A3,3 0 0,1 5,7A3,3 0 0,1 8,10C9.33,10.08 10.67,10.17 12,10.17C13.33,10.17 14.67,10.08 16,10A3,3 0 0,1 19,7A3,3 0 0,1 22,10C22,10.77 21.71,11.47 21.24,12C21.71,12.53 22,13.23 22,14A3,3 0 0,1 19,17A3,3 0 0,1 16,14C14.67,13.92 13.33,13.83 12,13.83C10.67,13.83 9.33,13.92 8,14Z" />
            </svg>
            <div className={styles.service__info}>
              <h2>Orthopedic Surgery</h2>
              Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry&apos;s 
            </div>
          </div>
          <div className={styles.service}>
            <svg viewBox="0 0 24 24">
              <path 
              d="M21.33,12.91C21.42,14.46 20.71,15.95 19.44,16.86L20.21,18.35C20.44,18.8 20.47,19.33 20.27,19.8C20.08,20.27 19.69,20.64 19.21,20.8L18.42,21.05C18.25,21.11 18.06,21.14 17.88,21.14C17.37,21.14 16.89,20.91 16.56,20.5L14.44,18C13.55,17.85 12.71,17.47 12,16.9C11.5,17.05 11,17.13 10.5,17.13C9.62,17.13 8.74,16.86 8,16.34C7.47,16.5 6.93,16.57 6.38,16.56C5.59,16.57 4.81,16.41 4.08,16.11C2.65,15.47 1.7,14.07 1.65,12.5C1.57,11.78 1.69,11.05 2,10.39C1.71,9.64 1.68,8.82 1.93,8.06C2.3,7.11 3,6.32 3.87,5.82C4.45,4.13 6.08,3 7.87,3.12C9.47,1.62 11.92,1.46 13.7,2.75C14.12,2.64 14.56,2.58 15,2.58C16.36,2.55 17.65,3.15 18.5,4.22C20.54,4.75 22,6.57 22.08,8.69C22.13,9.8 21.83,10.89 21.22,11.82C21.29,12.18 21.33,12.54 21.33,12.91M16.33,11.5C16.9,11.57 17.35,12 17.35,12.57A1,1 0 0,1 16.35,13.57H15.72C15.4,14.47 14.84,15.26 14.1,15.86C14.35,15.95 14.61,16 14.87,16.07C20,16 19.4,12.87 19.4,12.82C19.34,11.39 18.14,10.27 16.71,10.33A1,1 0 0,1 15.71,9.33A1,1 0 0,1 16.71,8.33C17.94,8.36 19.12,8.82 20.04,9.63C20.09,9.34 20.12,9.04 20.12,8.74C20.06,7.5 19.5,6.42 17.25,6.21C16,3.25 12.85,4.89 12.85,5.81V5.81C12.82,6.04 13.06,6.53 13.1,6.56A1,1 0 0,1 14.1,7.56C14.1,8.11 13.65,8.56 13.1,8.56V8.56C12.57,8.54 12.07,8.34 11.67,8C11.19,8.31 10.64,8.5 10.07,8.56V8.56C9.5,8.61 9.03,8.21 9,7.66C8.92,7.1 9.33,6.61 9.88,6.56C10.04,6.54 10.82,6.42 10.82,5.79V5.79C10.82,5.13 11.07,4.5 11.5,4C10.58,3.75 9.59,4.08 8.59,5.29C6.75,5 6,5.25 5.45,7.2C4.5,7.67 4,8 3.78,9C4.86,8.78 5.97,8.87 7,9.25C7.5,9.44 7.78,10 7.59,10.54C7.4,11.06 6.82,11.32 6.3,11.13C5.57,10.81 4.75,10.79 4,11.07C3.68,11.34 3.68,11.9 3.68,12.34C3.68,13.08 4.05,13.77 4.68,14.17C5.21,14.44 5.8,14.58 6.39,14.57C6.24,14.31 6.11,14.04 6,13.76C5.81,13.22 6.1,12.63 6.64,12.44C7.18,12.25 7.77,12.54 7.96,13.08C8.36,14.22 9.38,15 10.58,15.13C11.95,15.06 13.17,14.25 13.77,13C14,11.62 15.11,11.5 16.33,11.5M18.33,18.97L17.71,17.67L17,17.83L18,19.08L18.33,18.97M13.68,10.36C13.7,9.83 13.3,9.38 12.77,9.33C12.06,9.29 11.37,9.53 10.84,10C10.27,10.58 9.97,11.38 10,12.19A1,1 0 0,0 11,13.19C11.57,13.19 12,12.74 12,12.19C12,11.92 12.07,11.65 12.23,11.43C12.35,11.33 12.5,11.28 12.66,11.28C13.21,11.31 13.68,10.9 13.68,10.36Z" />
            </svg>
            <div className={styles.service__info}>
              <h2>Neuro Surgery</h2>
              Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry&apos;s 
            </div>
          </div>
          <div className={styles.service}>
            <svg viewBox="0 0 24 24">
              <path 
              d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
            </svg>
            <div className={styles.service__info}>
              <h2>Cardiology Services</h2>
              Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry&apos;s 
            </div>
          </div>
        </div>
        <div className={styles.services__more}>
          <hr className={styles.rule}/>
          <a className={styles.services__moreLink} href='#'>View more services</a>
        </div>

        <section className={styles.learn}>
          <picture className={styles.learn__image}>
            <Image 
            className={styles.learn__image}
            width={518}
            height={388}
            src='/images/flower_dog.jpg' alt='dog' />
          </picture>
          <div className={styles.learn__info}>
            <h2 className={styles.learn__header}>We <span className={styles.learn__love}>Love</span> our patients!</h2>
            <p className={styles.learn__text}> 
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry&apos;s 
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry&apos;s 
            </p>
            <hr className={styles.learn__rule} />
            <button className={styles.learn__button}> CONTACT </button>
          </div>
        </section>
          <div className={styles.banner}>
            <section className={styles.visit}>
              <h2 className={styles.visit__header}>Ready for a visit?</h2>
              <p className={styles.visit__paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry&apos;s Lorem Ipsum is simply dummy text of the 
              printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
              </p>
              <button className={styles.visit__button}> Appointment</button>
            </section>
          </div>
        </main>
        <Footer/>
    </>
  )
}
