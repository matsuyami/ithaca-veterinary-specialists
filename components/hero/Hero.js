import { Button } from '../button/Button'
import styles from './Hero.module.css'

export const Hero = ({ title, subHeading, backgroundPos, imageUrl, buttonOptions}) => {
  return (
    <section className={styles.banner} 
      style={{ backgroundImage: `url(${imageUrl})`,
               backgroundPosition: backgroundPos,
      }}>
      <div className={styles.banner__info}>
        <h1 className={styles.banner__header}>{title}</h1>
        <div className={styles.banner__text}>{subHeading}</div>
        <Button url={buttonOptions.url} 
                backgroundColor={buttonOptions.bg} 
                hoverColor={buttonOptions.hoverColor}>Contact</Button>
      </div>
    </section>
  )
}

Hero.defaultProps = {
  backgroundPos: 'unset',
}
