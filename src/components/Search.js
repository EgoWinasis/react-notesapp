const Search = ({onSearchHandle}) => {
    return (
        <div className="note-search">
            <input type="text" onChange={(event)=> onSearchHandle(event.target.value)} placeholder="Cari catatan..."></input>
        </div>
        
    )
}

export default Search