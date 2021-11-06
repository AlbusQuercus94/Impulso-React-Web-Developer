import React from "react";

function Item ( {text} ){
    return(
        <li><a href="#" className="list-group-item list-group-item-action list-group-item-info">
            {text}
        </a></li>
    )
}

export default Item