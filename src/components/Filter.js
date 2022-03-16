import React from "react";

export const Filter = (props) => {
    return(
        <div className="filter">
            <div>Filter shown with <input onChange={props.handleChange}></input></div>
        </div>
    )
}