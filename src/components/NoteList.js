import ActiveNote from "./ActiveNote";
import ArchivedNote from "./ArchivedNote";

const List = ({notes,unArchiveHandle,deleteHandle,archiveHandle,inputSearch}) =>{
    

    return (
        <div>
            <h2>Catatan Aktif</h2>
            <ActiveNote notes={notes} archiveHandle={archiveHandle} deleteHandle={deleteHandle} inputSearch={inputSearch}/>
            <h2>Arsip</h2>
            <ArchivedNote notes={notes} deleteHandle={deleteHandle} unArchiveHandle={unArchiveHandle} inputSearch={inputSearch}/>
        </div>
    )
}

export default List