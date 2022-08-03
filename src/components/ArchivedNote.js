import { showFormattedDate}  from '../utils/index';


const ArchivedNote = ({notes, deleteHandle,unArchiveHandle,inputSearch}) => {
    

        let archived = notes.filter((note)=>{
                if(note.archived === true){
                    if (inputSearch === '') {
                        return note
                    }else if (note.title.toLowerCase().includes(inputSearch.toLowerCase())) {
                        return note
                    }
                    return false
                }
            })

        if(archived.length === 0){        
                 return(<p className="notes-list__empty-message">Tidak ada catatan</p>);
        } 
        
        
        else{

        return(
            <div className="notes-list">
            {

                notes.filter((note)=>{
                    if(note.archived === true){
                        if (inputSearch === '') {
                            return note
                        }else if (note.title.toLowerCase().includes(inputSearch.toLowerCase())) {
                            return note
                        }
                            return false
                    }
                }
                    
                    ).map((note, index)=>{
                    
                        return(
                            
                                <div className="note-item" key={index}>
                                    <div className="note-item__content">
                                        <h3 className="note-item__title">{note.title}</h3>
                                        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>  
                                        <p className="note-item__body">
                                        {note.body}
                                        </p>
                                    </div>
                                    <div className="note-item__action">
                                        <button className="note-item__delete-button" onClick={() => deleteHandle(note.id)}>Delete</button>
                                        <button className="note-item__archive-button" onClick={() => unArchiveHandle(note.id)}>Pindahkan</button>
                                    </div>
                                </div>
                            
        
                        );

                    
                })
            }
            </div>
        )}
}


export default ArchivedNote