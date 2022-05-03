import { FC } from 'react'
import { IRegion } from '../types/IRegion'
import { FiAlertTriangle } from 'react-icons/fi'
import styles from './Menu.module.scss'
import dayjs from 'dayjs'
require('dayjs/locale/uk')

interface IMenuItem {
    item: IRegion
}

export const MenuItem: FC<IMenuItem> = ({ item }) => {

    const date = dayjs(Date.parse(item?.changed))
        .locale('uk')
        .format("D MMMM, HH:mm")

    return (
        <li className={styles.item} key={item?.id}>
            <FiAlertTriangle className={styles.icon}/>
            <span className={styles.name}>{item?.name}</span>
            <span className={styles.date}>{date}</span>
        </li>
    )
}
