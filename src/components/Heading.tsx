import styles from './Heading.module.css'

export function Heading(props: Readonly<{ children?: React.ReactNode }>) {
  return (
    <h3 className={`${styles.heading} ${styles.black}`}>{props.children}</h3>
  )
}
