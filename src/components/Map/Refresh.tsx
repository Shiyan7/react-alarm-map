import { FC } from 'react'
import {BiRefresh} from 'react-icons/bi'

interface IRefresh {
}

export const Refresh: FC<IRefresh> = () => {

    const handleRefresh = () => {
        console.log('refresh');
    }

    return (
        <button className='btn-reset refresh' onClick={handleRefresh}>
            <BiRefresh />
        </button>
    )
}
