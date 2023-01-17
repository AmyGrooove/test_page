import styles from './index.module.scss'

import { ARROW, CART, CHEVRON, PROFILE, SEARCH } from '@/theme/sources'
import CircleLine from '@/components/CircleLine'
import useInput from '@/hooks/useInput'
import CustomInput from '@/components/CustomInput'

const Recomendation = () => {
  const {
    name,
    setName,
    number,
    setNumber,
    comment,
    setComment,
    sumbitButton,
    error,
    item1,
    item2,
    item3,
  } = useInput()

  return (
    <div className={styles.container}>
      <div className={styles.container_animationWrapper}>
        <div ref={item1} className={styles.container_animationWrapper_box} />
        <div ref={item2} className={styles.container_animationWrapper_box} />
        <div ref={item3} className={styles.container_animationWrapper_box} />
      </div>
      <div className={styles.container_upElement}>
        <CircleLine />
        <div className={styles.container_title}>
          <CircleLine />
          <div>Тестовый текст</div>
        </div>
        <div className={styles.container_images}>
          <img src={PROFILE} alt="" />
          <img src={SEARCH} alt="" />
          <img src={CART} alt="" />
          <img src={CHEVRON} alt="" />
          <img src={ARROW} alt="" />
        </div>
        <div className={styles.container_inpWrapper}>
          <div className={styles.container_inpWrapper_input}>
            <CustomInput
              name="Ваше имя *"
              value={name}
              onChange={setName}
              error={error === 1 || error === 2}
            />
            <CustomInput
              name="Номер телефона *"
              value={number}
              onChange={setNumber}
              error={error === 1 || error === 3}
            />
            <CustomInput
              name="Комментарий"
              value={comment}
              onChange={setComment}
            />
          </div>
          <button
            className={styles.container_inpWrapper_sumbitButton}
            onClick={sumbitButton}
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Recomendation
