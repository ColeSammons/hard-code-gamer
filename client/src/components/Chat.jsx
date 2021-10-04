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

    const socketRef = useRef()

    useEffect(() => {
        socketRef.current = io.connect('http://localhost:3002')
        socketRef.current.on("message", ({message}) => {
            setChat([ ...chat, { message } ] )
        })
        return () => socketRef.current.disconnect()
    }, [ chat ])

    // const textWatcher = (e) => {
    //     setState ({ ...state, [e.target.username]: e.target})
    // }
    const onTextChange = (e) => {
        setState ({ ...state, [e.target.username]: e.target.value })
    }

    const onMessageSubmit = (e) => {
        const { username, message} = state
        socketRef.current.emit("message", { username, message })
        e.preventDefault()
        setState({ message:"", username })
    }

return(
    <div className="chatSection">
        <form onSubmit={onMessageSubmit}>
            <h1>Chat</h1>
            <div className="chatRendered">
            {}
            </div>
            <div>
            <TextField
                username="message"
                onChange={(e) => onTextChange(e)}
                value={state.message}
                id=""
                variant="outlined"
                label="Send a message..."
            />
        </div>
        </form>
    
    </div>
)

}
export default Chat;