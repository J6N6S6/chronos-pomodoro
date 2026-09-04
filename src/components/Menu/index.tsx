import { ClipboardClock, Columns3Cog, House, SunMoon } from 'lucide-react'

import styles from './styles.module.css'
import { MenuItems } from './MenuItems'

export function Menu() {
  return (
    <nav className={`${styles.menu}`}>
      <a className={`${styles.menuLink}`} href='/'>
        <MenuItems>
          <House />
        </MenuItems>
      </a>
      <a className={`${styles.menuLink}`} href='/'>
        <MenuItems>
          <ClipboardClock />
        </MenuItems>
      </a>
      <a className={`${styles.menuLink}`} href='/'>
        <MenuItems>
          <Columns3Cog />
        </MenuItems>
      </a>
      <a className={`${styles.menuLink}`} href='/'>
        <MenuItems>
          <SunMoon />
        </MenuItems>
      </a>
    </nav>
  )
}
