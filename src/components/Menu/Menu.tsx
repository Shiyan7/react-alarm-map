import {useAppSelector} from '../../hooks/redux'
import {useDispatch} from 'react-redux'
import {toggleMenu} from '../../store/reducers/menuSlice'
import {useSwipeable} from 'react-swipeable'
import {MenuItem} from './MenuItem'
import {IoCloseOutline} from 'react-icons/io5'
import styles from './Menu.module.scss'
import classNames from 'classnames'

export const Menu = () => {

    const {isOpenMenu} = useAppSelector(state => state.menuReducer)
    const {alarmRegions} = useAppSelector(state => state.alarmReducer)

    const dispatch = useDispatch()

    const onToggle = () => dispatch(toggleMenu())

    const handlers = useSwipeable({trackMouse: false, onSwipedRight: onToggle});

    const menuContent = () => {

        const items = [...alarmRegions]?.sort((a, b) => Date.parse(b?.changed) - Date.parse(a?.changed));

        return (
			<>
				<h2 className={classNames('title', styles.title)}>Області, в яких зараз тривога: ({alarmRegions.length})</h2>
				<ul className={classNames(styles.list, 'list-reset')}>
					{items?.map((region, idx) => (
						<MenuItem key={idx} item={region} />
					))}
				</ul>
    		</>
		)
    }

    return (
        <div
            onClick={onToggle}
            className={classNames(styles.menu, isOpenMenu && styles.menuActive)}
		>
            <div
                {...handlers}
                onClick={e => e.stopPropagation()}
                className={styles.content}
            >
                <button onClick={onToggle} className={classNames('btn-reset', styles.menuClose)}>
                    <IoCloseOutline />
                </button>
                {alarmRegions.length
                    ? menuContent()
                    : <h2 className={classNames('title', styles.empty)}>Нема тривог!</h2>
				}
            </div>
        </div>
    )
}