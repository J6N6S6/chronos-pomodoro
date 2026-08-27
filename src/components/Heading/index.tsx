import styles from './styles.module.css'

type HeadingProps = {
  children?: React.ReactNode
  attr?: React.HTMLAttributes<HTMLHeadingElement>
}

export function Heading({ children, attr }: Readonly<HeadingProps>) {
  return (
    <h3 className={`${styles.heading}`} {...attr}>
      {children}
    </h3>
  )
}
