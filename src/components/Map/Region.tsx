import classNames from 'classnames'
import {FC} from 'react'
import {ISvgRegion} from '../../types/ISvgRegion'
import styles from './Map.module.scss'

interface IRegionProps {
    region: ISvgRegion
}

export const Region: FC<IRegionProps> = ({region}) => {

    return (
        <g className={classNames(styles.region, region.disabled && styles.regionDisabled)}>
            <path
                d={region.d}
                fill={region.fill}
                stroke='rgba(255, 255, 255, 0.2)'
            />
            <text
                fill='#fff'
                strokeWidth="0.1"
                xmlSpace="preserve"
                style={{whiteSpace: 'nowrap'}}
                fontSize={region.fontSize || 20}
                x={region.titleX}
                y={region.titleY}
            >
                {region?.title}
            </text>
        </g>
    )
}