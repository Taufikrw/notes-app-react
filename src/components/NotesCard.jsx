import React from 'react';
import NotesItem from "./NotesItem.jsx";

function NotesCard({ notes, onDelete, onArchive }) {
    return (
        <div className="notes-list">
            {
                notes.map(note => (
                    <NotesItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        {...note} />
                ))
            }
        </div>
    );
}

export default NotesCard;