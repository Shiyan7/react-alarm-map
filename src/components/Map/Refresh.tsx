import { FC } from 'react'
import {BiRefresh} from 'react-icons/bi'

interface IRefresh {
    loadRegions: () => void;
}

export const Refresh: FC<IRefresh> = ({loadRegions}) => {

    return (
        <button className='btn-reset refresh' onClick={loadRegions}>
            <BiRefresh />
        </button>
    )
}
