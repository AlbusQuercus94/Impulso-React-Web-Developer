import React from "react";
import Item from "./Item";
import Card from "./Card";

function Parte6() {
  return(
      <>
        <h1>Hello, World!</h1>
        <p>My first React aplication</p>
        <p>I'm programming with ReactJS</p>
        <ul>
            <Item text='First Item'/>
            <Item text='Second Item'/>
            <Item text='Third Item'/>
        </ul>
        <Card/>
      </>
    )  
}

export default Parte6
