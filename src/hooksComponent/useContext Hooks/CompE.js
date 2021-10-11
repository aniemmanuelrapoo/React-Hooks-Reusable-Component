import React, { useContext } from 'react'
import CompF from './CompF'
import { UseContext, ChannelContext } from '../../App'

const CompE = () => {
    const user = useContext(UseContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            <CompF />
            {user} - {channel}
        </div>
    )
}

export default CompE
