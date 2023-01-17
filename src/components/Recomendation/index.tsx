import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'

import styles from './index.module.scss'

import { ARROW } from '@/theme/sources'
import CircleLine from '@/components/CircleLine'
import 'swiper/css'
import 'swiper/css/free-mode'
import { IMAGES } from '@/constants'

const Recomendation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <CircleLine />
        <div className={styles.container_title_link}>
          <div className={styles.container_title_link_text}>
            Рекомендуем попробовать
          </div>
          <img src={ARROW} alt="" />
        </div>
      </div>
      <Link href="#">
        <div className={styles.container_fullLink}>Смотреть всё меню</div>
      </Link>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={25}
        freeMode
        grabCursor
        modules={[FreeMode]}
        // slidesOffsetBefore={200}
        className={styles.container_swiper}
      >
        {IMAGES.map((el, index) => (
          <SwiperSlide key={index} className={styles.container_swiper_item}>
            <img src={el.img} />
            <div>{el.name}</div>
          </SwiperSlide>
        ))}
        <SwiperSlide className={styles.container_swiper_item}>
          <div />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Recomendation
