import styles from './styles.module.css'

type DefaultInputProps = {
  id: string
  labelText?: string
} & React.ComponentProps<'input'>

export function DefaultInput({
  labelText,
  ...props
}: Readonly<DefaultInputProps>) {
  return (
    <>
      {labelText && (
        <label className={styles.label} htmlFor={props.id || 'defaultInput'}>
          {labelText}
        </label>
      )}
      <input className={styles.input} required {...props} />
    </>
  )
}
