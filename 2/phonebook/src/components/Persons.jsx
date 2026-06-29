const Persons = (props) => (
    <ul>
        {props.persons.filter(person => person.name.toLowerCase().includes(props.filter.toLowerCase())).map(person =>
            <div>{person.name} {person.number}</div>
        )}
    </ul>
)

export default Persons