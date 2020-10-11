import React from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
function Imessage() {
    return (
        <div className="imessage">
            {/* Here comes sidebar component */}
            <Sidebar />
            {/* Here comes chat component */}
            <Chat />
        </div>
    )
}

export default Imessage