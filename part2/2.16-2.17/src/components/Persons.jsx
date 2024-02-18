export const Persons = ({ persons, filterText, deletePerson }) => {
  const personsToShow = filterText
    ? persons.filter(person => person.name.includes(filterText))
    : persons

  return (
    <div>
      {personsToShow.map(person => (
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={() => deletePerson(person)}>delete</button>
        </div>
      ))}
    </div>
  )
}
