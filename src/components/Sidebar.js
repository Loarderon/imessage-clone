import { Avatar } from '@material-ui/core'
import React from 'react'

function Sidebar() {
    return (
    <div>
        <h1>I'm a sidebar</h1>

        <div className="sidebar__header">
          <Avatar />
        </div>

        <div className="sidebar__chats">


        </div>
    </div>
    )
}

export default Sidebar
