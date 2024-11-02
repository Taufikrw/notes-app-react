import React from 'react';

function ActionButton({archived, id, onDelete, onArchive}) {
    return (
        <div className="notes-item__action-button">
            <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
            {
                !archived ? (
                    <button className="achieve-button" onClick={() => onArchive(id)}>Archive</button>
                ) : (
                    <button className="achieve-button" onClick={() => onArchive(id)}>Unarchived</button>
                )
            }
        </div>
    )
}

export default ActionButton;