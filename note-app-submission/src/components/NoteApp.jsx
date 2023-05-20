import React from 'react';
import {getInitialData} from '../utils'
import NoteList from './NoteList';
import AddNote from './AddNote';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            notes: getInitialData(),
            search: '',
        }

        this.onChangeSearchEventHandler = this.onChangeSearchEventHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    }

    onAddNoteHandler({title, body}) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: new Date().toJSON(),
                        title,
                        body,
                        createdAt: new Date().toJSON(),
                        archived: false
                    }
                ]
            }
        }) 
    }

    onArchiveHandler(id, title, body, createdAt, archived) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });

        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id,
                        title,
                        body,
                        createdAt,
                        archived
                    }
                ]
            }
        }) 
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onChangeSearchEventHandler(event) {
        this.setState(() => {
            return {
                search: event.target.value
            }
        });
    }

    render() {
        return (
            <div className='notes-app'>
                <div className='header'>
                    <h1>Notes App Faturar</h1>
                    <div className='search-input'>
                        <input type="text" onChange={this.onChangeSearchEventHandler} value={this.state.search} placeholder='Search a note...' />
                    </div>
                </div>
                <div className="container">
                    <AddNote addNote={this.onAddNoteHandler} />
                    <NoteList 
                        notes={this.state.notes} 
                        onArchiveHandler={this.onArchiveHandler} 
                        onDelete={this.onDeleteNoteHandler} 
                        search={this.state.search}
                    />
                </div>
            </div>
        )
    }
}

export default NoteApp;