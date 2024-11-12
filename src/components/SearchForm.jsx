import React from 'react';
import PropTypes from "prop-types";

function SearchForm({keyword, keywordChange}) {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search here..."
                value={keyword}
                onChange={(e) => keywordChange(e.target.value)}
            />
        </div>
    );
}

SearchForm.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
};

export default SearchForm;