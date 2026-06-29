const handleFilterChange = (event) => {
    setFilter(event.target.value)
}

const Filter = (props) => (
    <div>
        filter shown with <input
            value={props.filterName}
            onChange={props.filterOnChange}
        />
    </div>
)

export default Filter