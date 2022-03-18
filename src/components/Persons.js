import React from "react";

export const Persons = ({ persons, filterPerson }) => {
  return (<div className="persons">{persons
  .filter(persons => persons.name.toLowerCase().includes(filterPerson.toLowerCase()))
  .map(persons => (<li key={persons.id}>{persons.name}: {persons.phone}</li>))}</div>)
}