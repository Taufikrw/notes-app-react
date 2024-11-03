import React from 'react';
import {getData} from "../utils/data.js";
import NotesCard from "./NotesCard.jsx";
import NotesForm from "./NotesForm.jsx";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getData(),
            archiveNotes: [],
        }

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    }

    onDeleteEventHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        const archiveNotes = this.state.archiveNotes.filter(note => note.id !== id);
        this.setState({notes, archiveNotes})
    }

    onArchiveEventHandler(id) {
        const note = this.state.notes.find(note => note.id === id);

        if (note) {
            note.archived = true;
            const notes = this.state.notes.filter(note => note.id !== id);
            const archiveNotes = [...this.state.archiveNotes, note];
            this.setState({notes, archiveNotes})
        }
    }

    onAddNotesHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: +new Date(),
                        archived: false,
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div className="notes-app">
                <h1>Notes App</h1>
                <h2>Add Notes</h2>
                <NotesForm addNotes={this.onAddNotesHandler} />
                <h2>Your Notes</h2>
                <NotesCard notes={this.state.notes} onDelete={this.onDeleteEventHandler}
                           onArchive={this.onArchiveEventHandler}/>
                <hr/>
                <h1>Archive Notes</h1>
                {
                    this.state.archiveNotes.length > 0 ? (
                        <NotesCard notes={this.state.archiveNotes} onDelete={this.onDeleteEventHandler} onArchive={this.onArchiveEventHandler}/>
                    ) : (
                        <p>No Data</p>
                    )
                }
            </div>
        )
    }
}

export default NotesApp;