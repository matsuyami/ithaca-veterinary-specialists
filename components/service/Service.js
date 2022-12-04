import { useState } from 'react'
import styles from './Service.module.css'

export const Service = ({description, children}) => {
  const [clicked, setClicked] = useState(false)

  return (
    <div className={styles.service} onClick={() => setClicked(prevClicked => !prevClicked)}>
      <div className={styles.service__box}>
        <div className={styles.service__name}> {children}
          <div className={styles.service__arrow}>
            <svg xmlns="http://www.w3.org/2000/svg">
              <image href="/images/down-arrow.svg" height="24" width="24" />
            </svg>
          </div>
        </div>
        { clicked && 
          <p className={styles.service__details}>
            {description}
          </p>
        }
      </div>
    </div>
  )
}
