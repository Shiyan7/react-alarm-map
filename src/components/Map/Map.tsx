import { Region } from './Region'
import { FC, useEffect } from 'react'
import { COLOR_ALARM, COLOR_DEFAULT } from '../../utils/consts'
import { regions } from '../../data/regions'
import { useFetchAlarmMapQuery } from '../../services/AlarmService'
import { IRegion } from '../../types/IRegion'
import { Refresh } from './Refresh'
import { useDispatch } from 'react-redux'
import { removeAlarmRegion, setAlarmRegion } from '../../store/reducers/alarmSlice'
import { useAppSelector } from '../../hooks/redux'

export const Map: FC = () => {

    const { data } = useFetchAlarmMapQuery([], {pollingInterval: 10000})
    const { alarmRegions } = useAppSelector(state => state.alarmReducer)
    const dispatch = useDispatch()
    const states: IRegion[] = data?.states;

    const loadRegions = async () => {
        states?.forEach(region => {
            /* Если у региона тревога, и его нет в массиве */

            if(region.alert && !alarmRegions.includes(region)) {
                dispatch(setAlarmRegion(region))
            } else {
                dispatch(removeAlarmRegion(region.id))
            }
        })
    };

    useEffect(() => {
        loadRegions()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    console.log(alarmRegions);
    
    return (
        <div className="map">
            <svg viewBox="0 0 1000 670" fill={COLOR_DEFAULT} xmlns="http://www.w3.org/2000/svg">
                <g id="map">
                    {regions?.map((region, idx) => {

                        const alarmRegion = alarmRegions.find(alarmRegion => alarmRegion.id === region.id);
                                    
                        alarmRegion ? region.fill = COLOR_ALARM : region.fill = COLOR_DEFAULT

                        return (
                            <Region key={idx} region={region}/>
                        )
                    })}
                </g>
            </svg>
        </div>
    )
}