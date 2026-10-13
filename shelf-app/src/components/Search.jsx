export default function Search({ value, onQueryChange }) {
    return (
        <div className="search">
            <input
                type="text"
                value={value}
                onChange={(event) => onQueryChange(event.target.value)} 
                className="search-input"
            />
        </div>
    )
}