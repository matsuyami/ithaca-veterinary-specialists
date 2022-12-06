import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Hero } from '../../components/hero/Hero'
import Head from 'next/head'
import styles from './Resources.module.css'

const buttonOptions = {
  bg: 'var(--blue)',
  hoverColor: 'var(--primary-clr)',
  url: '/contact'
}

export default function Resources() {
  return(
    <>
      <Head>
        <title>Ithaca Veterinary Specialists | Appointments </title>
      </Head>
      <Header/>
      <Hero title='Resources' subHeading='dolor sit amet consectetur adipisicing elit. '
        imageUrl='/images/yawn-dog.jpg' backgroundPos='center' buttonOptions={buttonOptions}/>
      <div className={styles.resources}>
          <div className={styles.resources__items}>
            <div className={styles.resources__referral}>
              <a href='#'>Referral Form</a>
            </div>
            <div className={styles.resources__newPatient}>
              <a href='#'>New Patient Form</a>
            </div>
          </div>

          <span className={styles.resources__notice}> Please email the filled out forms to 
           <span className={styles.resources__email}> hello@vetspecialists.com </span>
          </span>
          <div className={styles.resources__cancellation}>
            Please be advised that there will be a $75.00 cancellation/no show fee imposed 
            on all cancellations made less than 48 hrs of a scheduled appointment. 
            We know that this may seem like a very expensive penalty; however, please understand 
            that-by not showing up and leaving an empty spot on the schedule- you are taking up an 
            appointment time that another patient on our waiting list could have benefitted from. 
            Thank you very much for your understanding.
          </div>
      </div> 
      <Footer/>
    </>
  )
}
