import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
  ])
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

  const handleNewNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = event => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      {persons.map(person => (
        <div id={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  )
}

export default App
