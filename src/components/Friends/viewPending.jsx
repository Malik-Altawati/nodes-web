import React from "react";
import Button from '@material-ui/core/Button';

function ViewPending(props) {

    var handleSubmit = e => {
        e.preventDefault();
        var username = localStorage.getItem("username")
        let user = {
            username
        };
        alert("viewPending was clicked")
        fetch("https://nodes-chat-app.herokuapp.com/getRequests", {
            method: "POST",

            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(user)
        }).then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                //                                     reponse returns friend requests // 
            })
    }

    return (
        <div>
            <form className="signin-form"
                onSubmit={handleSubmit}>
                <Button type="submit" variant="contained" color="primary" >view friend requests</Button>
            </form></div>
    )


}


export default ViewPending