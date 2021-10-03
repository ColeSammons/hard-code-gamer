import React, { useEffect, useRef, useState } from "react"
import "../style/Chat.css"
import io from "socket.io-client"
import TextField from "@material-ui/core/TextField"

// connecting back end
const socket = io.connect('http://localhost:3002')

function Chat() {
    // passing through objects
    const [state, setState] = useState({message: ''})
    // empty array for the objects message and username
    const [chat, setChat] =  useState([])
return(
    <div className="chatSection">
        <form onSubmit={}>
            <h1>Chat</h1>
            <div className="chatRendered">
            {}
            </div>
            <TextField


            />

        </form>
    
    </div>
)

}
export default Chat;