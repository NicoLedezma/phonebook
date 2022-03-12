import React from "react";

export const Persons = ({ persons }) => {
  return <li> {persons.name}  {persons.number}</li>
}