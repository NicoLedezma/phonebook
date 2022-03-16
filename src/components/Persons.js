import React from "react";

export const Persons = ({ persons, filterPerson }) => {
  return persons
  .filter(persons => persons.name.toLowerCase().includes(filterPerson))
  .map(persons => (<li key={persons.name}>{persons.name}: {persons.phone}</li>))
}