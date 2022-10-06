import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'

export const Header = () => {

  const useWindowWidth= () => {
    const [width, setWidth] = useState(0)
    useEffect( () => {
      function handleResize() {
        const isLaptopSize = window.innerWidth >= 1024 ? true : false
        setWidth(window.innerWidth)
        setIsOpen(isLaptopSize)
      }

      window.addEventListener('resize', handleResize)
      handleResize()
    }, [setWidth])
    return width  
  }

  const [isOpen, setIsOpen] = useState(false)
  useWindowWidth()

  const hamburgerToggle = isOpen 
    ? `${styles.nav__toggle} ${styles['open']}` 
    : styles.nav__toggle

  const handleClick = event => {
    event.preventDefault()
    setIsOpen(current => !current)
  }

   return (
        <header>
          <div className={styles.header}>
            <span className={styles.header__info}>
              <a className={styles.header__link} href='tel:559-559-559'>
                <svg className={styles.header__icon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span className={styles.header__text}>Call 559-559-559</span>
              </a>
            </span>      
            <span className={styles.header__info}>
              <a className={styles.header__link} href='tel:559-559-559'>
                <svg className={styles.header__icon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span className={styles.header__text}>hello@vetspecialist.com</span>
              </a>
            </span>      
            <span className={styles.header__info}>
              <a className={styles.header__link} href='https://goo.gl/maps/mGi5wzrVjgPJRoVc6' 
              target='_blank'
              rel="noreferrer"
              >
                <svg className={styles.header__icon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" 
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                        clipRule="evenodd"></path>
                </svg>
                <span className={styles.header__text}>1610 Dryden Rd, Freeville, NY</span>
              </a>
            </span>      
          </div>
    
            <div className={styles.header__navigation}>
              <div className={styles.header__logo}>
                <Image 
                width={150}
                height={75}
                src='/images/logo.png' alt='logo'/>        
              </div>
              {isOpen && 
                <nav className={styles.nav}>  
                  <ul className={styles.nav__list}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Services</a></li>
                    <li className={styles.nav__nestedItem}><a href='#'>Resources</a>
                        <ul className={styles.nav__nested}>
                          <li><a href='#'>New Client</a></li>
                          <li><a href='#'>Referral Form</a></li>
                        </ul>
                    </li>
                    <li><a href='#'>Contact</a></li>
                  </ul>
                </nav> 
              }
              <div className={hamburgerToggle} onClick={handleClick}>
                <div className={styles.hamburger}></div> 
              </div>
            </div>
        </header>
   )  
}