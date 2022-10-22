import styles from './Member.module.css'

export const Member = () => {
  return (
    <div className={styles.member}>
      <div className={styles.member__container}>
        <img src='/images/dr-dan-hoffman.jpg' className={styles.member__image}
        alt='ithaca doctor' fetchPriority='low' loading='lazy' decoding='async'/>
        <div className={styles.name}>Dr. Dan Hoffman </div>
        <div className={styles.title}> Veterinarian </div>
      </div>
    </div>
  )
}
