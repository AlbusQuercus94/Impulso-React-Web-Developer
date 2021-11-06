import React, { useState } from "react";
import Button from "./Button";


function Card (){

    const [value, setValue] = 
        useState(0);

    function Add (){
        setValue(value + 1)
    }

    function Subtract (){
        setValue(value - 1)
    }

    return(
        <div className='card'>
            <div className='card-header'>
                My first Card in React.
            </div>
            <div className='card-body'>
                <p>My card's text.</p>
                <Button 
                text ='Add' 
                funct = {Add}
                type = 'success'/>
                <Button 
                text ='Subtract' 
                funct = {Subtract}
                type = 'danger'/>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default Card