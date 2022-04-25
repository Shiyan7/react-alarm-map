import { SvgRegionRepository } from "../../repository/SvgRegionRepository";
import { IRegion } from "../../types/IRegion";
import { Status } from "../../types/Status";
import { Region } from "./Region";
import { useEffect, useState } from "react";
import { COLOR_ALARM, COLOR_DEFAULT, INTERVAL_SEC } from "../../utils/consts";
import { RegionRepository } from "../../repository/RegionRepository";
import { TelegramRegionStatusService } from "../../api/telegram/TelegramRegionStatusService";
import { BiRefresh } from 'react-icons/bi'
import './Map.css'

const svgRegions: any = new SvgRegionRepository().getAll();

// const {data, isLoading} = useFetchMapQuery([], {pollingInterval: 20000})

export const Map = () => {

    const [alarmRegions, setAlarmRegions] = useState<IRegion[]>([])
    let [seconds, setSeconds] = useState<number>(INTERVAL_SEC)

    const loadRegions = async () => {
        const statusService = new TelegramRegionStatusService();

        let regions: IRegion[] = [];

        for (let region of new RegionRepository().getAll()) {
            region.status = await statusService.getStatus(region);
            regions.push(region)
        }
        
        await setAlarmRegions(regions);
    };

    useEffect(() => {
        loadRegions()
    }, [])

    useEffect(() => {
        setTimeout(async () => {
            if(seconds > 1) {
                await setSeconds(seconds - 1)
            } else {
                await loadRegions()
                await setSeconds(INTERVAL_SEC)
            }
        }, INTERVAL_SEC * 100)
    }, [seconds])

    return (
        <>
            <div className="map">
                <svg viewBox="0 0 1000 670" fill={COLOR_DEFAULT} xmlns="http://www.w3.org/2000/svg">
                    <g id="map">
                        {svgRegions.map((svgRegion: any, idx: number) => {

                            const alarmRegion = alarmRegions.find((region: any) => region.id === svgRegion.id);
                            
                            if (alarmRegion) {
                                svgRegion.title = alarmRegion.title;
                                svgRegion.fill = alarmRegion.status === Status.ALERT && COLOR_ALARM;
                            }

                            return (
                                <Region key={idx} region={svgRegion}/>
                            )
                        })}
                    </g>
                </svg>
            </div>
            <div className="refresh">
                <BiRefresh />
                {seconds}
            </div>
        </>
    )
}
