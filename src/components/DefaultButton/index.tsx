import styles from './styles.module.css'

type DefaultButtonProps = {
  icon: React.ReactNode
  action?: 'play' | 'stop' | 'pause'
} & React.ComponentProps<'button'>

export function DefaultButton({
  icon,
  action = 'play',
  ...props
}: Readonly<DefaultButtonProps>) {
  return (
    <button className={`${styles.button} ${styles[action]}`} {...props}>
      {icon}
    </button>
  )
}
