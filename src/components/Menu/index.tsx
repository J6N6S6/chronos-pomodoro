import { ClipboardClock, Columns3Cog, House, SunMoon } from 'lucide-react'

import styles from './styles.module.css'
import { MenuItems } from './MenuItems'
import { useState, useEffect } from 'react'

type AvailableTheme = 'light' | 'dark'

export function Menu() {
  const [theme, setTheme] = useState<AvailableTheme>('dark')

  function handleClickTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault()
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark'
      return newTheme
    })
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <h1>{theme}</h1>
      <nav className={`${styles.menu}`}>
        <a className={`${styles.menuLink}`} href='/'>
          <MenuItems ariaLabel='Home' title='Home'>
            <House />
          </MenuItems>
        </a>
        <a className={`${styles.menuLink}`} href='/'>
          <MenuItems ariaLabel='Tasks' title='Tasks'>
            <ClipboardClock />
          </MenuItems>
        </a>
        <a className={`${styles.menuLink}`} href='/'>
          <MenuItems ariaLabel='Settings' title='Settings'>
            <Columns3Cog />
          </MenuItems>
        </a>
        <a className={`${styles.menuLink}`} href='/'>
          <MenuItems ariaLabel='Theme' title='Theme' onClick={handleClickTheme}>
            <SunMoon />
          </MenuItems>
        </a>
      </nav>
    </>
  )
}
