import { useState } from 'react'
import styles from './Service.module.css'

export const Service = ({children}) => {
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet eros sodales, ultrices ante et, 
              vulputate nulla. Cras ultricies velit erat, vel faucibus justo iaculis sit amet. Integer ac lectus ut risus 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet eros sodales, ultrices ante et, 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet eros sodales, ultrices ante et, 
              vulputate nulla. Cras ultricies velit erat, vel faucibus justo iaculis sit amet. Integer ac lectus ut risus 
              vulputate nulla. Cras ultricies velit erat, vel faucibus justo iaculis sit amet. Integer ac lectus ut risus 
          </p>
        }
      </div>
    </div>
  )
}
