import React from 'react';

function SearchForm({search, onSearch}) {
    return (
        <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={onSearch}
        />
    );
}

export default SearchForm;