import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'

function Search(props) {
    const [username, setUsername] = useState("");

    var handleSubmit = e => {
        e.preventDefault();
        let user = {
            username
        };
        alert("search was clicked")
        fetch("https://nodes-chat-app.herokuapp.com/search", {
            method: "POST",

            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(user)
        }).then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                //                                     reponse returns if user exists // 
                setUsername('')
            })
    }

    return (

        <form className="signin-form"
            onSubmit={handleSubmit}>
            <label >SEARCH FOR A USER</label>
            <Input
                placeholder="~ENTER USERNAME~"
                type="text"
                value={username}
                onChange={e => {
                    setUsername(e.target.value);
                }}
            ></Input>
            <Button type="submit" variant="contained" color="primary" >SEARCH</Button>
        </form>
    )
}


export default Search