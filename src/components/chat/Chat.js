import { IconButton } from '@material-ui/core'
import { MicNone } from '@material-ui/icons'
import React, { useState } from 'react'
import './Chat.scss'

function Chat() {
    const [input, setInput] = useState('')
    const sendMessage = (e) =>{
        e.preventDefault()

        setInput("")
    }
    return (
        <div className='chat'>
            {/* chat header */}
            <div className='chat__header'>
                <h4>To: <span className='chat__name'> Channel name</span>
                </h4>
                <strong>Details</strong>
            </div>

            {/* chat messages */}
            <div className="chat__messages">
                <h2>I'm a message!</h2>
                <h2>I'm a message!</h2>
                <h2>I'm a message!</h2>
                <h2>I'm a message!</h2>
                <h2>I'm a message!</h2>

            </div>
            {/* chat input */}
            <div className="chat__input">
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Message a friend..."
                        type="text" />
                        <button onClick={sendMessage}>Send message</button>
                </form>
                <IconButton>
                <MicNone className="chat__mic" />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
