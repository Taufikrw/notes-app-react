import React from 'react';
import ActionButton from './ActionButton';

function NotesItem({title, body, id, onDelete, onArchive}) {
    return (
        <div className="notes-item">
            <h2>{title}</h2>
            <p>{body}</p>
            <ActionButton id={id} onDelete={onDelete} onArchive={onArchive}/>
        </div>
    );
}

export default NotesItem;