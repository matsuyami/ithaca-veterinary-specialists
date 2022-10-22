import styles from './Member.module.css'

export const Member = () => {
  return (
    <div className={styles.member__container}>
      <div className={styles.member}>
        <img src='/images/dr-dan-hoffman.jpg' className={styles.member__image}
        alt='ithaca doctor' fetchpriority='low' loading='lazy' decoding='async'/>
        <div className={styles.name}>Dr. Dan Hoffman </div>
        <div className={styles.title}> Veterinarian </div>
      </div>

      <div className={styles.member}>
        <img src='/images/flower_dog.jpg' className={styles.member__image}
        alt='ithaca doctor' fetchpriority='low' loading='lazy' decoding='async'/>
        <div className={styles.name}>Dr. Dan Hoffman </div>
        <div className={styles.title}> Veterinarian </div>
      </div>
      <div className={styles.member}>
        <img src='/images/teapot_dog.jpg' className={styles.member__image}
        alt='ithaca doctor' fetchpriority='low' loading='lazy' decoding='async'/>
        <div className={styles.name}>Dr. Dan Hoffman </div>
        <div className={styles.title}> Veterinarian </div>
      </div>
      <div className={styles.member}>
        <img src='/images/dr-dan-hoffman.jpg' className={styles.member__image}
        alt='ithaca doctor' fetchpriority='low' loading='lazy' decoding='async'/>
        <div className={styles.name}>Dr. Dan Hoffman </div>
        <div className={styles.title}> Veterinarian </div>
      </div>
    </div>
  )
}
