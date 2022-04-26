import classNames from 'classnames'
import {FC} from 'react'
import {ISvgRegion} from '../../types/ISvgRegion'
interface IRegionProps {
    region : ISvgRegion
}

export const Region : FC <IRegionProps> = ({region}) => {

    return (
        <g className={classNames('region', region.disabled && 'region--disabled')}>
            <path
                d={region.d}
                fill={region.fill}
                stroke='#000'
            />
            <text
                fontFamily='sans-serif'
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