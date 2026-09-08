import styles from './styles.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='' target='_blank' rel='noopener noreferrer'>
        Understand the Pomodoro Technique
      </a>
      <a href='' target='_blank' rel='noopener noreferrer'>
        Pulse&copy; {new Date().getFullYear()} All rights reserved.
      </a>
    </footer>
  )
}
