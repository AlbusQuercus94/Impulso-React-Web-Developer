import React from "react";

function Button ({text, funct, type}){
    return(
        <button  
        type='button' 
        className={`btn btn-${type}`} 
        onClick ={funct}> {/*Boa prática, separar os atributos por linha */}
            {text}
        </button>
    )
}

export default Button