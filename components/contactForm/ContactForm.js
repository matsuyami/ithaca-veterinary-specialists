import { Button } from '../button/Button'
import styles from './ContactForm.module.css'

export const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <div className={styles.contactForm__heading}>
        <h2 className={styles.contactForm__header}>Let's Talk</h2>
        <svg xmlns="http://www.w3.org/2000/svg">
          <image href="/images/waving_emoji.svg" height="40" width="40" />
        </svg>
      </div>
      <form className={styles.contactForm_form} action="/send-data-here" method="post">
        <div className={styles.contactForm__info}>
          <div>
            <label className={styles.contactForm__label} htmlFor="name">Name</label>
            <input placeholder='Name' className={styles.contactForm__input} type="text" name="Name" />
          </div>

          <div>
            <label className={styles.contactForm__label} htmlFor="email">Email</label>
            <input placeholder='Email' className={styles.contactForm__input} type="text" name="Email" />
          </div>
        </div>

        <label className={styles.contactForm__label} htmlFor="message" name="Messaage">Message</label>
        <textarea placeholder='Please enter your message here' className={styles.contactForm__textArea}></textarea>

        <div className={styles.contactForm__button}>
          <input type='submit'/>
        </div>
      </form>
    </div>
  )
}