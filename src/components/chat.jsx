import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'


//set room name id here !!!

useEffect(() => {
    var soket = io('http://localhost:5000/room1').on('connect', () => {
        console.log('connected!')
    })
})

export function Chat(props) {
    //using hooks
    const [message, setMessage] = useState('')


    var handleSubmit = (e) => {
        e.preventDefault()

        //submit the form 
        setMessage('');
        //here I want to use 
        io.emit(message)
    }
    return (
        <div >
            THIS is the CHAT SECTION
            <br />
            <br />
            <br />
            <div className="message-container">
                <form
                    onSubmit={handleSubmit}
                    style={{ padding: "300px" }}>
                    <Input
                        type="text"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        multiline></Input>
                    <Button
                        type="submit"
                        color="secondary"
                    >Send</Button>
                </form>
            </div>
        </div >
    )
}