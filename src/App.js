import React, { useState } from "react";
import { Persons } from "./components/Persons";
import { Filter } from "./components/Filter"
import { PersonsForm } from "./components/PersonsForm"


export const App = (props) => {
const [persons, setPersons] = useState(props.persons)
const [filterPerson, setFilterPerson] = useState('')
const [newName, setNewName] = useState('')
const [newPhone, setNewPhone] = useState('')

const handlePersonSearch = (e) => {
  setFilterPerson(e.target.value)
}

const addPerson = (e) => {
  e.preventDefault()

  const newPerson = {
    name: newName,
    phone: newPhone
  }
  const indexName = persons.findIndex(persons => persons.name === newPerson.name)
  const indexPhone = persons.findIndex(persons => persons.phone === newPerson.phone)
  if ((indexName === -1 || indexPhone === -1) && newName !== '' && newPhone !== ''){
  setPersons(persons.concat(newPerson))
  setNewName('')
  setNewPhone('')
  }
  else alert('Hace las cosas bien.!')
}

const handlePersonNameChange = (e) => {
  setNewName(e.target.value)
}

const handlePersonPhoneChange = (e) => {
  setNewPhone(e.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={handlePersonSearch}/>
      <h2>Add a new</h2>
      <PersonsForm 
        handleSubmit={addPerson} 
        valueNewName={newName} 
        valueNewPhone={newPhone}
        handlePersonNameChange={handlePersonNameChange}
        handlePersonPhoneChange={handlePersonPhoneChange}
      />
      <h2>Numbers</h2>
      <Persons 
        persons={persons} 
        filterPerson={filterPerson}
      />
    </div>
  );
};
