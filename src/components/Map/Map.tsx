import { Region } from './Region'
import { FC, useEffect } from 'react'
import { COLOR_ALARM, COLOR_DEFAULT } from '../../utils/consts'
import { regions } from '../../data/regions'
import { useFetchAlarmMapQuery } from '../../services/AlarmService'
import { IRegion } from '../../types/IRegion'
import { useDispatch } from 'react-redux'
import { setAlarmRegions } from '../../store/reducers/alarmSlice'
import { useAppSelector } from '../../hooks/redux'

export const Map: FC = () => {

    const { data } = useFetchAlarmMapQuery([], {pollingInterval: 10000})
    const { alarmRegions } = useAppSelector(state => state.alarmReducer)
    const dispatch = useDispatch()
    const states: IRegion[] = data?.states;

    const loadRegions = () => {

        const regions: IRegion[] = []

        states?.forEach(region => {
            if(region.alert) {
                regions.push(region)
            }
        })
        
        dispatch(setAlarmRegions(regions))
    };

    useEffect(() => {
        loadRegions()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div className="map">
            <svg viewBox="0 0 1000 670" fill={COLOR_DEFAULT} xmlns="http://www.w3.org/2000/svg">
                <g id="map">
                    {regions?.map((region, idx) => {

                        const alarmRegion = alarmRegions.find(alarmRegion => alarmRegion.id === region.id);
                                    
                        !alarmRegion ? region.fill = COLOR_DEFAULT : region.fill = COLOR_ALARM

                        return (
                            <Region key={idx} region={region}/>
                        )
                    })}
                </g>
            </svg>
        </div>
    )
}