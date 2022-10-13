import Link from "next/link"
import { useState } from "react"
import styles from './Button.module.css'

export const Button = ({url, backgroundColor, color, hoverColor, children}) => {

  const [bg, setBg] = useState(backgroundColor)

  return (
    <button className={styles.button} 
      style={{backgroundColor: bg, color: color}}
      onMouseOver={() => setBg(hoverColor)}
      onMouseOut ={() => setBg(backgroundColor)}
      >
      <Link href={url}>
        <a>{children}</a>
      </Link>
    </button>
  )
}