import React from "react";

function Parte3() {
  return(
      <>{/*React Fragment */}
        <h1>Hello, World!</h1>
        <p>My first React aplication</p>
        <p>I'm programming with ReactJS</p>
        <ul className='list-group'>
            <li><a href="#" className="list-group-item list-group-item-action list-group-item-info">First Item</a></li>
            <li><a href="#" className="list-group-item list-group-item-action list-group-item-info">Second Item</a></li>
            <li><a href="#" className="list-group-item list-group-item-action list-group-item-info">Third Item</a></li>
        </ul>
      </>
    )  
}

export default Parte3