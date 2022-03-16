import React from "react";

export const Filter = (props) => {
    return(
        <div>
            filter shown with <input onChange={props.handleChange}></input>
        </div>
    )
}