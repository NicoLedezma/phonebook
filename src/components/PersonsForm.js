import React from "react";

export const PersonsForm = (props) => {
  return(
    <div className="personsForm">
      <form onSubmit={props.handleSubmit}>
        <div>Name <input value={props.valueNewName} onChange={props.handlePersonNameChange}></input></div>
        <div>Phone <input value={props.valueNewPhone} onChange={props.handlePersonPhoneChange}></input></div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>  
  )
}