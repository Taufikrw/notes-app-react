import React from 'react';
import ActionButton from './ActionButton';

function NotesItem({title, body, archived, id, onDelete, onArchive}) {
    return (
        <div className="notes-item">
            <h2>{title}</h2>
            <p>{body}</p>
            <ActionButton archived={archived} id={id} onDelete={onDelete} onArchive={onArchive}/>
        </div>
    );
}

export default NotesItem;