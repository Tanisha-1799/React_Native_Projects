//Making a functional component

import React from "react";

function Profile(p){
    const red=()=>{
        alert("This is my Page !!")
    }
    return(
        <div>
            <h1 onClick={red}>{p.text}</h1>
            <h2>Welcome {p.data.name}</h2>
        </div>
    )
};

export default Profile;