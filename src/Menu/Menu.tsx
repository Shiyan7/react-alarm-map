import { Burger } from './Burger'
import { useAppSelector } from '../hooks/redux'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../store/reducers/menuSlice'
import { useSwipeable } from 'react-swipeable'
import { MenuItem } from './MenuItem'
import styles from './Menu.module.scss'
import classNames from 'classnames'

export const Menu = () => {

	const { isOpenMenu } = useAppSelector(state => state.menuReducer)
  const { alarmRegions } = useAppSelector(state => state.alarmReducer)

  const dispatch = useDispatch()

	const onToggle = () => dispatch(toggleMenu())

  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedRight: onToggle
  });

  const regions = () => {

    return (
      <>
        <h2 className={styles.title}>Области в которых сейчас тревога: ({alarmRegions.length})</h2>
        <ul className={classNames(styles.list, 'list-reset')}>
          {alarmRegions?.map(region => (
            <MenuItem item={region} />
          ))}
        </ul>
      </>
    )
  }

  return (
    <>
      <Burger />
      <div onClick={onToggle} className={classNames(styles.menu, isOpenMenu && styles.menuActive)}>
        <div {...handlers} onClick={e => e.stopPropagation()} className={styles.content}>
          {alarmRegions.length
            ? regions()
            : <h2 className={classNames(styles.title, styles.titleCenter)}>Нет тревог!</h2>
          }
        </div>
      </div>
    </>
  )
}