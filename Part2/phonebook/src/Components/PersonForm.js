const PersonForm = (props) => {

    const newName = props.newName
    const newNumber = props.newNumber

    return (
        <div>
            <form onSubmit={props.addPerson}>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={props.handleNameChange}
                    />
                </div>
                <div>
                    number:
                    <input
                        value={newNumber}
                        onChange={props.handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
        
    )
}
export default PersonForm