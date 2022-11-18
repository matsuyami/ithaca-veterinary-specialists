import { Button } from '../button/Button'
import styles from './ContactForm.module.css'

export const ContactForm = () => {
  return (
    <form className={styles.contactForm} action="/send-data-here" method="post">
      <div className={styles.contactForm__info}>
        <label className={styles.contactForm__label} htmlFor="name">Name</label>
        <input className={styles.contactForm__input} type="text" name="Name" />

        <label className={styles.contactForm__label} htmlFor="email">Email</label>
        <input className={styles.contactForm__input} type="text" name="Email" />
      </div>

      <label className={styles.contactForm__label} htmlFor="message" name="Messaage">Message</label>
      <textarea className={styles.contactForm__textArea}></textarea>

      <div className={styles.contactForm__button}>
        <Button backgroundColor={'var(--blue)'} color={'var(--white)'} 
                hoverColor={'var(--secondary-clr)'}> 
        Submit
        </Button>
      </div>
    </form>
  )
}