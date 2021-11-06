import React, { useState } from "react";


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
                <button  
                type='button' 
                className='btn btn-success' 
                onClick ={Add}> {/*Boa prática, separar os atributos por linha */}
                    Add
                </button>
                <button 
                type='button' 
                className='btn btn-danger' 
                onClick ={Subtract}> {/*Boa prática, separar os atributos por linha */}
                    Subtract
                </button>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default Card