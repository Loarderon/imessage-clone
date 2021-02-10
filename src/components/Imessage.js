import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Chat from './chat/Chat'
import './Imessage.scss'
function Imessage() {
    return (
        <div className="imessage">
            <Sidebar />
            <Chat />
        </div>
    )
}

export default Imessage