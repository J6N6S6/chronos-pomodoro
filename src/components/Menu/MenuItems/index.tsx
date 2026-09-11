import styles from './styles.module.css'

type MenuItemsProps = {
  children: React.ReactNode
  ariaLabel?: string
  title?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

export function MenuItems({
  children,
  ariaLabel,
  title,
  onClick,
}: Readonly<MenuItemsProps>) {
  return (
    <a
      className={`${styles.menuItemsLink}`}
      href='/'
      aria-label={ariaLabel}
      title={title}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
