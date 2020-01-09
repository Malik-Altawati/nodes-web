import React from "react";
import Button from '@material-ui/core/Button';

function ShowFriends(props) {

    var handleSubmit = e => {
        e.preventDefault();
        var username = localStorage.getItem("username")
        let user = {
            username
        };
        alert("showFriends was clicked")
        fetch("https://nodes-chat-app.herokuapp.com/getFriends", {
            method: "POST",

            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(user)
        }).then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                //                                     reponse returns friends // 
            })
    }

    return (
        <div>
            <form className="signin-form"
                onSubmit={handleSubmit}>
                <Button type="submit" variant="contained" color="primary" >Show Friends</Button>
            </form></div>
    )


}


export default ShowFriends