import styles from './index.module.scss'

const CircleLine = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.wrapper_circle}></span>
      <span className={styles.wrapper_circle}></span>
      <span className={styles.wrapper_circle}></span>
    </div>
  )
}

export default CircleLine
