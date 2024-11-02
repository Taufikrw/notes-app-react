import React from 'react';
import {getData} from "../utils/data.js";
import NotesCard from "./NotesCard.jsx";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes : getData(),
        }

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    }

    onDeleteEventHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes})
    }

    onArchiveEventHandler(id) {
        console.log("Archive ", id);
    }

    render() {
        return (
            <div className="notes-app">
                <h1>Notes App</h1>
                <h2>Your Notes</h2>
                <NotesCard notes={this.state.notes} onDelete={this.onDeleteEventHandler} onArchive={this.onArchiveEventHandler} />
            </div>
        )
    }
}

export default NotesApp;