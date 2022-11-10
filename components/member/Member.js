import styles from './Member.module.css'
import { urlFor } from '../../lib/sanity'

export const Member = ({memberData}) => {
  return (
    <div className={styles.member__container}>
        <div className={styles.member}>
          <img src={urlFor(memberData.profilePhoto).url()} className={styles.member__image}
            alt={memberData.title + memberData.name} 
            fetchpriority='low' loading='lazy' decoding='async'/>
          <div className={styles.member__info}>
            <div className={styles.name}>{memberData.title + ' ' + memberData.name}</div>
            <div className={styles.title}>{memberData.jobTitle}</div>
          </div>
        </div>
    </div>
  )
}
