import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
          <iframe title='google maps' className={styles.footer__directions} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.6381341402694!2d-76.38535528475767!3d42.477984379179055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89da790217f25afd%3A0x9cc0e78372657b79!2sElemental%20Pet%20Vets!5e0!3m2!1sen!2sus!4v1663957135338!5m2!1sen!2sus" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <div className={styles.footer__info}>
            <section className={styles.footer__section}>
              <h2 className={styles.footer__header}>Navigation</h2>
              <ul className={styles.footer__nav}>
                <li><a href='/'>Home</a></li> 
                <li><a href='/about'>About</a></li> 
                <li><a href='team'>Our Team</a></li> 
                <li><a href='/services'> Services </a></li> 
                <li><a href='resources'> Resources </a></li> 
                <li><a href='/contact'>Contact</a></li> 
              </ul>
            </section>

            <section className={styles.footer__section}>
              <h2 className={styles.footer__header}>Visit our hospital</h2>
              <div className={styles.footer__hours}>
                <div className={styles.footer__day}>
                  <p>Monday-Friday</p>
                  <p>9:00am - 6:00pm</p>
                </div>
                <div className={styles.footer__day}>
                  <p>Saturday</p>
                  <p>9:00am - 6:00pm</p>
                </div>
                <div className={styles.footer__day}>
                  <p>Sunday</p>
                  <p>9:00am - 6:00pm</p>
                </div>
              </div>
              <p className={styles.footer__address}>
              <strong><a className={styles.footer__contact} href='#'>559-559-559</a></strong>
              <br/>
                <a className={styles.footer__contact} href='#'>5555 E Testing Ave<br/>Freeville, NY 11111</a>
              </p>
            </section>
          </div>
        </footer>
    )
}
