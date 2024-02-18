import { useEffect, useState } from "react"
import axios from "axios"

import { Filter } from "./components/Filter"
import { PersonForm } from "./components/PersonForm"
import { Persons } from "./components/Persons"
import personsServices from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [filterText, setFilterText] = useState("")
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  useEffect(() => {
    personsServices.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const handleFilterTextChange = event => {
    setFilterText(event.target.value)
  }

  const handleNewNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = event => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const newPerson = { name: newName, number: newNumber }
    const existingPerson = persons.find(
      person => person.name === newName || person.number === newNumber
    )

    if (existingPerson) {
      updatePerson(existingPerson.id, newPerson)
      return
    }

    personsServices.create(newPerson).then(addedPerson => {
      const updatedPersons = persons.concat(addedPerson)
      setPersons(updatedPersons)
      setNewName("")
      setNewNumber("")
    })
  }

  const deletePerson = person => {
    const { id, name } = person
    const isConfirmed = window.confirm(`Delete ${name} ?`)
    if (isConfirmed) {
      personsServices.deleteById(id).then(deletedPerson => {
        const updatedPersons = persons.filter(
          person => person.id != deletedPerson.id
        )
        setPersons(updatedPersons)
      })
    }
  }

  const updatePerson = (id, newObject) => {
    const isConfirmed = window.confirm(
      `${newObject.name} is already added to phonebook, replace the old number with a new one?`
    )
    if (isConfirmed) {
      personsServices.updateById(id, newObject).then(updatedPerson => {
        const updatedPersons = persons.map(person =>
          person.id === id ? updatedPerson : person
        )
        setPersons(updatedPersons)
        setNewName("")
        setNewNumber("")
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterText={filterText}
        handleFilterTextChange={handleFilterTextChange}
      />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        handleNewNameChange={handleNewNameChange}
        newNumber={newNumber}
        handleNewNumberChange={handleNewNumberChange}
        handleSubmit={handleSubmit}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        filterText={filterText}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App
