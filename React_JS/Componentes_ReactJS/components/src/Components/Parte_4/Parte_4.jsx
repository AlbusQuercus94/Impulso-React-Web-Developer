import React from "react";
import Item from "./Item";

function Parte4() {
  return(
      <>
        <h1>Hello, World!</h1>
        <p>My first React aplication</p>
        <p>I'm programming with ReactJS</p>
        <ul className='list-group'>
            <Item text='First Item'/>
            <Item text='Second Item'/>
            <Item text='Third Item'/>
        </ul>
      </>
    )  
}

export default Parte4