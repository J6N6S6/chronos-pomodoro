import styles from './styles.module.css'

type ContainerProps = {
  children?: React.ReactNode
  attr?: React.HTMLAttributes<HTMLDivElement>
}

export function Container({ children, attr }: Readonly<ContainerProps>) {
  return (
    <div className={`${styles.container}`} {...attr}>
      <div className={`${styles.content}`} {...attr}>
        {children}
      </div>
    </div>
  )
}
