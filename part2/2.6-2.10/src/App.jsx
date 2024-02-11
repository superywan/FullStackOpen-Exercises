import { useState } from "react"

const Filter = ({ filterText, handleFilterTextChange }) => {
  return (
    <div>
      filter shwon with:{" "}
      <input value={filterText} onChange={handleFilterTextChange} />
    </div>
  )
}

const PersonForm = ({
  newName,
  handleNewNameChange,
  newNumber,
  handleNewNumberChange,
  handleSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

const Persons = ({ persons, filterText }) => {
  const personsToShow = filterText
    ? persons.filter(person => person.name.includes(filterText))
    : persons

  return (
    <div>
      {personsToShow.map(person => (
        <div id={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ])
  const [filterText, setFilterText] = useState("")
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const handleSubmit = event => {
    event.preventDefault()

    const isAlreadyAdded = persons.find(
      person => person.name === newName || person.number === newNumber
    )
    if (isAlreadyAdded) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPersons = [...persons, { name: newName, number: newNumber }]
    setPersons(newPersons)
    setNewName("")
    setNewNumber("")
  }

  const handleFilterTextChange = event => {
    setFilterText(event.target.value)
  }

  const handleNewNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = event => {
    setNewNumber(event.target.value)
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
      <Persons persons={persons} filterText={filterText} />
    </div>
  )
}

export default App
