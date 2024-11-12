import React from "react";
import {deleteNotes, getArchiveNotes, unarchiveNotes} from "../utils/data.js";
import SearchForm from "../components/SearchForm.jsx";
import NotesCard from "../components/NotesCard.jsx";
import {useSearchParams} from "react-router-dom";

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') || '';

    function changeSearchParams(keyword) {
        setSearchParams({keyword});
    }
    return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getArchiveNotes(),
            keyword: this.props.defaultKeyword || '',
        }

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        this.onUnarchiveEventHandler = this.onUnarchiveEventHandler.bind(this);
    }

    onDeleteEventHandler(id) {
        deleteNotes(id);
        this.setState({
            notes: getArchiveNotes(),
        });
    }

    onUnarchiveEventHandler(id) {
        unarchiveNotes(id);
        this.setState({
            notes: getArchiveNotes(),
        })
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });
        this.props.keywordChange(keyword);
    }

    render() {
        const notes = this.state.notes.filter(note =>
            note.title.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
            note.body.toLowerCase().includes(this.state.keyword.toLowerCase())
        );

        return (
            <section>
                <SearchForm keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <h2 className="section-header">Archive Notes</h2>
                <div className="notes-grid">
                    <NotesCard notes={notes} onDelete={this.onDeleteEventHandler} onArchive={this.onUnarchiveEventHandler} />
                </div>
            </section>
        );
    }
}

export default ArchivePageWrapper;