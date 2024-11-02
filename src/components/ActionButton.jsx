import React from 'react';

function ActionButton({ id, onDelete, onArchive }) {
    return (
        <div className="notes-item__action-button">
            <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
            <button className="achieve-button" onClick={() => onArchive(id)}>Achieve</button>
        </div>
    )
}

export default ActionButton;