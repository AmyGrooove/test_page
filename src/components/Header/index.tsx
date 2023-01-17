import Link from 'next/link'

import styles from './index.module.scss'

import Dropdown from '@/components/Dropdown'
import { RESTAURANTS } from '@/constants'
import { CART, LOGO, PROFILE, SEARCH } from '@/theme/sources'


const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_left}>
          <img src={LOGO} alt="" />
          <ul className={styles.wrapper_left_menu}>
            <Dropdown links={RESTAURANTS}>Рестораны</Dropdown>
            <li>События</li>
            <li>Контакты</li>
            <li>Перезвоните мне</li>
          </ul>
        </div>
        <div className={styles.wrapper_right}>
          <Link href="#">
            <div className={styles.wrapper_right_item}>
              <img src={SEARCH} alt="" />
            </div>
          </Link>
          <Link href="#">
            <div className={styles.wrapper_right_item}>
              <img src={CART} alt="" />
              <div className={styles.wrapper_right_item_notification}>1</div>
            </div>
          </Link>
          <Link href="#">
            <div className={styles.wrapper_right_item}>
              <img src={PROFILE} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
