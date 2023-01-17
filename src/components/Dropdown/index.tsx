import Link from 'next/link'

import styles from './index.module.scss'

import { CHEVRON } from '@/theme/sources'

interface IDropdown {
  children: string;
  links: string[];
}

const Dropdown = ({ children, links }: IDropdown) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_label}>
        <div className={styles.container_label_text}>{children}</div>
        <img src={CHEVRON} alt="" />
      </div>
      <ul className={styles.container_menu}>
        {links.map((el) => (
          <Link key={el} href={el}>
            {el}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
