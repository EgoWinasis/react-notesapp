import Search from "./Search";

const Navbar = ({onSearchHandle}) =>{
    return(
        <div className="note-app__header sticky-top">
            <h1>Notes App</h1>
            <Search onSearchHandle={onSearchHandle}/>
        </div>
    )
}

export default Navbar