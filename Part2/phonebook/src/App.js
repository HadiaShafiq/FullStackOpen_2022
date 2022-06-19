import { useState } from "react";
import Person from "./Components/Person";
import PersonForm from "./Components/PersonForm";
import Filter from "./Components/Filter";

const App = () => {

    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const [keyword, setKeyword] = useState('')
    const [searching, setSearching] = useState(true)

    const addPerson = (event) => {
        event.preventDefault()
        if (newName === '' || newNumber === '') {
            alert("Enter complete info ")
        }
        const found = persons.some(el => el.name.toLowerCase() === newName.toLowerCase());
        if (!found) {
            const nameObj = {
                id: persons.length + 1,
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(nameObj))
            setNewName('')
            setNewNumber('')
        }
        else
            alert(`${newName} already exists in the phonebook`)
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleKeywordChange = (event) => {
        if (event.target.value.trim().length) {
            setKeyword(event.target.value)
            setSearching(false)
        } else
            setKeyword('')
    }

    const phoneNumbersToShow = searching ? persons : persons.filter(person => (person.name.toLowerCase()).includes(keyword.toLowerCase()))
    return (
        <div>

            <h1>Phonebook</h1>
            <Filter keyword={keyword} handleKeywordChange={handleKeywordChange} />


            <h2>Add a new Phone Number</h2>
            <PersonForm persons={persons} addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newName={newName} newNumber={newNumber} />
            

            <h1>Numbers </h1>
            {phoneNumbersToShow.map(person =>
                <Person key={person.id} name={person.name} number={person.number} />
            )}

        </div>
    )
}

export default App;
