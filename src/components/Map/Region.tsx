import { FC } from 'react'
import { ISvgRegion } from '../../types/ISvgRegion'

interface IRegion {
  region: ISvgRegion
}

export const Region: FC<IRegion> = ({ region }) => {
  return (
    <g className="region" id={region.id}>
      <path
        d={region.d}
        fill={region.fill}
        stroke={region.stroke || '#000'}
        strokeWidth={region.strokeWidth || 0.5}
        strokeLinecap={region.strokeLinecap || 'round'}
        strokeLinejoin={region.strokeLinejoin || 'round'}
      />

      <text
        fill='#fff'
        strokeWidth="0.1"
        xmlSpace="preserve"
        style={{whiteSpace: 'nowrap'}}
        fontFamily={region.fontFamily || 'sans-serif'}
        fontSize={region.fontSize || 20}
        letterSpacing={region.letterSpacing || 0}
        x={region.titleX}
        y={region.titleY}
      >
        {region?.title}</text>
    </g>
  )
}