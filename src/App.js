import React, { useState } from "react";
import { Persons } from "./components/Persons";

export const App = (props) => {
  const [persons, setPerson] = useState(props.persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterNameValue, setFilterNameValue] = useState('')

  const filterName = (e) => {
    setFilterNameValue(e.target.value)
    let personsAux = persons
    if(filterNameValue.length>0){
      setPerson(personsAux.filter(persons => persons.name.includes(filterNameValue)))
    }
  }

  const addPerson = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const indexName = persons.findIndex(persons=>persons.name === newPerson.name)
    const indexNumber = persons.findIndex(persons=>persons.number === newPerson.number)
    if((indexName === -1 || indexNumber === -1) && newName !== '' && newNumber !== ''){
    setPerson(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
    }
    else alert(``)
  }

  const numChange = (e) => {
    setNewNumber(e.target.value)
  }

  const nameChange = (e) => {
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={filterNameValue} onChange={filterName} /></div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>Name:   <input value={newName} onChange={nameChange}/></div>
        <div>Number: <input value={newNumber} onChange={numChange}/></div>
        <div>
          <button
            type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(persons => (
          <Persons key={persons.name} persons={persons}/>
        ))}
      </ul>
    </div>
  );
};
