import React from "react";
import { getInitialData}  from '../utils/index';

import Navbar from "./Navbar";
import CreateNote from "./CreateNotes"
import NoteList from "./NoteList"


class NotesApp extends React.Component{

     constructor(props) {
    super(props);
 
    
    this.state = {
      notes: getInitialData(),
            inputSearch: '',
            formvalue: {
                id: '',
                title: '',
                body: '',
                archived: false,
                createdAt: ''
            }
    };

        this.archiveHandle = this.archiveHandle.bind(this)
        this.unArchiveHandle = this.unArchiveHandle.bind(this)
        this.onSearchHandle = this.onSearchHandle.bind(this)
        this.onSubmitHandle = this.onSubmitHandle.bind(this)
        this.deleteHandle = this.deleteHandle.bind(this)
        this.onTitleHandle = this.onTitleHandle.bind(this)
        this.onBodyHandle = this.onBodyHandle.bind(this)

}
    

     onSubmitHandle = (event) => {
        event.preventDefault();
    
        let newState = this.state.notes
        newState.push({
            id: +new Date(),
            title: this.state.formvalue.title,
            body: this.state.formvalue.body,
            archived: this.state.formvalue.archived,
            createdAt: new Date().toISOString().slice(0, 10)
        })

        this.setState((prevstate) => {
            return {
                ...prevstate,
                notes: newState,
                formvalue: {
                    id: '',
                    title: '',
                    body: '',
                    archived: false,
                    createdAt: ''
                },
            }
        })

    }


     onTitleHandle(value) {
       if (value.length > 50) {
            return false
        }
        this.setState((prevstate) => {
            return {
                ...prevstate,
                formvalue: {
                    ...prevstate.formvalue,
                    title: value
                }
            }
        })
    };

      onBodyHandle (value) {
        this.setState((prevstate) => {
            return {
                ...prevstate,
                formvalue: {
                    ...prevstate.formvalue,
                    body: value
                }
            }
        })
    };

    deleteHandle(id){
        this.setState((prevstate) => {
            return {
                ...prevstate,
                notes: this.state.notes.filter(note => note.id !== id)  
            }
        })
    }

    archiveHandle(id){
        let note = this.state.notes.filter(note => note.id === id)
        note[0].archived = true

        let newNote = this.state.notes.filter(note => note.id !== id)

        this.setState((prevstate) => {
            return {
                ...prevstate,
                notes: [
                    ...newNote,
                    note[0]
                ]
            }
        })
    }

    unArchiveHandle(id){
        let note = this.state.notes.filter(note => note.id === id)
        note[0].archived = false

        let newNote = this.state.notes.filter(note => note.id !== id)

        this.setState((prevstate) => {
            return {
                ...prevstate,
                notes: [
                    ...newNote,
                    note[0]
                ]
            }
        })
    }

    onSearchHandle(value){
        this.setState((prevstate) => {
            return {
                ...prevstate,
                inputSearch: value
            }
        })
    }

    render(){
            return(
            <div>
                <Navbar onSearchHandle={this.onSearchHandle}/>
                 <div className="note-app__body">
                <CreateNote formvalue={this.state.formvalue} onSubmitHandle={this.onSubmitHandle} onTitleHandle={this.onTitleHandle} onBodyHandle={this.onBodyHandle}/>
                <NoteList notes={this.state.notes} unArchiveHandle={this.unArchiveHandle} archiveHandle={this.archiveHandle} deleteHandle={this.deleteHandle} inputSearch={this.state.inputSearch}/>
                </div>
                
            </div>
        );
    }

  

}


export default NotesApp