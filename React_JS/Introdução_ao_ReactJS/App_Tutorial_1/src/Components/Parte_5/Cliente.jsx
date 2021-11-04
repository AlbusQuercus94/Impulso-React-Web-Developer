import React from "react";

function Client (props){
    const { name,age, gender } = props
    return(
        <div>
                <p>The client name is {name}.</p>
                <p>Has {age} years.</p>
                <p>Gender: {gender}</p>
        </div>
    )
}

export default Client