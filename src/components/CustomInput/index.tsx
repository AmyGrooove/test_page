import { Dispatch, SetStateAction } from 'react'

import styles from './index.module.scss'

interface ICustomInut {
  name: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  error?: boolean;
}

const CustomInput = ({ name, value, onChange, error }: ICustomInut) => {
  return (
    <div className={styles.wrapper + ' ' + (error && styles.error)}>
      <input
        placeholder={name}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className={styles.wrapper_error + ' ' + (error && styles.error)}>
        Текст ошибки
      </div>
    </div>
  )
}

export default CustomInput
