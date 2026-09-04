import styles from './styles.module.css'

type MenuItemsProps = {
  children: React.ReactNode
}

export function MenuItems({ children }: Readonly<MenuItemsProps>) {
  return (
    <a className={`${styles.menuItemsLink}`} href='/'>
      {children}
    </a>
  )
}
