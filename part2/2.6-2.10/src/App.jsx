import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    const isAlreadyAdded = persons.find(person => person.name === newName);
    if (isAlreadyAdded) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPersons = [...persons, { name: newName }];
    setPersons(newPersons);
    setNewName("");
  };

  const handleNewNameChange = event => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input type="text" value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <div id={person.name}>{person.name}</div>
      ))}
    </div>
  );
};

export default App;
