

const CreateNote = ({formvalue,onSubmitHandle,onTitleHandle,onBodyHandle})  => {
  
    return(
        <div className="note-input">
            <h2>Buat Catatan</h2>
            <form onSubmit={onSubmitHandle}>
                <p className="note-input__title__char-limit">
                    Sisa Karakter : {50 - (formvalue.title).length}
                </p>
                <input type="text" maxLength={50} value={formvalue.title} className="note-input__title" placeholder="Masukan Judul..." onChange={(event) => onTitleHandle(event.target.value)} required></input>
                <textarea className="note-input__body" type="text" placeholder="Tuliskan Catatanmu..." value={formvalue.body} onChange={(event) => onBodyHandle(event.target.value) }required></textarea>
                <button type="submit">Buat</button>
            </form>
        </div>
    )
}

export default CreateNote