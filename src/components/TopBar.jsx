import React from "react";

function TopBar({ search, onSearch }) {
    return (
        <div className="top-bar">
            <h1>Notes App</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search notes..."
                    value={search}
                    onChange={onSearch}
                />
            </div>
        </div>
    );
}

export default TopBar;