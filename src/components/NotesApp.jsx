import React from 'react';
import {getData} from "../utils/data.js";
import NotesCard from "./NotesCard.jsx";
import NotesForm from "./NotesForm.jsx";
import SearchForm from "./SearchForm.jsx";
import TopBar from "./TopBar.jsx";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getData(),
            archiveNotes: [],
            search: "",
        }

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
        this.onUnarchiveEventHandler = this.onUnarchiveEventHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
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

    onUnarchiveEventHandler(id) {
        const note = this.state.archiveNotes.find(note => note.id === id);

        if (note) {
            note.archived = false;
            const archiveNotes = this.state.archiveNotes.filter(note => note.id !== id);
            const notes = [...this.state.notes, note];
            this.setState({notes, archiveNotes})
        }
    }

    onAddNotesHandler({title, body}) {
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

    // make search functionality in search form
    onSearchHandler(e) {
        this.setState({search: e.target.value});
    }

    render() {
        const filteredNotes = this.state.notes.filter(note =>
            note.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
            note.body.toLowerCase().includes(this.state.search.toLowerCase())
        );

        return (
            <div className="notes-app">
                <TopBar search={this.state.search} onSearch={this.onSearchHandler}/>
                <NotesForm addNotes={this.onAddNotesHandler}/>
                <h2 className="section-header">Your Notes</h2>
                {filteredNotes.length > 0 ? (
                    <div className="notes-grid">
                        <NotesCard notes={filteredNotes} onDelete={this.onDeleteEventHandler}
                                   onArchive={this.onArchiveEventHandler}/>
                    </div>
                ) : (
                    <p className="no-data">No Data</p>
                )}
                <h2 className="section-header">Archive Notes</h2>
                {this.state.archiveNotes.length > 0 ? (
                    <div className="notes-grid">
                        <NotesCard notes={this.state.archiveNotes} onDelete={this.onDeleteEventHandler}
                                   onArchive={this.onUnarchiveEventHandler}/>
                    </div>
                ) : (
                    <p className="no-data">No Data</p>
                )}
            </div>
        )
    }
}

export default NotesApp;