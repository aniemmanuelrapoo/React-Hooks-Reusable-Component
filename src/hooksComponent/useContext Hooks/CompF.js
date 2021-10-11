import React from 'react'
import {ChannelContext, UseContext} from '../../App'

const CompF = () => {
    return (
        <div>
            <UseContext.Consumer>
                {
                    user => {
                        return(
                        <ChannelContext.Consumer>
                            {
                                msg => {
                                     return <h1>welcome {user} {msg}</h1>
                                }
                            }
                        </ChannelContext.Consumer>
                        )
                    }
                }
            </UseContext.Consumer>
            
        </div>
    )
}

export default CompF
