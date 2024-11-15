import React from 'react';
import {Link} from "react-router-dom";
import parser from 'html-react-parser';
import {showFormattedDate} from "../utils/formattedDate.js";

function NotesCard({notes, onDelete, onArchive}) {
    return (
        <>
            {notes.map((note) => (
                <div key={note.id} className="notes-card">
                    <h3>{note.title}</h3>
                    <div className="notes-card__body">
                        <span>{showFormattedDate(note.createdAt)}</span>
                        <p>{parser(note.body)}</p>
                    </div>
                    <div className="button-container">
                        {
                            !note.archived ? (
                                <Link to={`/notes/${note.id}`}>
                                    <button className="link-button">View</button>
                                </Link>
                            ) : null
                        }
                        <button onClick={() => onDelete(note.id)}>Delete</button>
                        <button onClick={() => onArchive(note.id)}>{note.archived ? 'Unarchive' : 'Archive'}</button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default NotesCard;