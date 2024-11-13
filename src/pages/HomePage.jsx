import React from "react";
import {archiveNotes, deleteNotes, getNotes} from "../utils/data.js";
import NotesCard from "../components/NotesCard.jsx";
import SearchForm from "../components/SearchForm.jsx";
import {Link, useSearchParams} from "react-router-dom";
import {MdAddCircleOutline} from "react-icons/md";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') || '';

    function changeSearchParams(keyword) {
        setSearchParams({keyword});
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams}/>;
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onDeleteEventHandler(id) {
        deleteNotes(id);
        this.setState({
            notes: getNotes(),
        });
    }

    onArchiveEventHandler(id) {
        archiveNotes(id);
        this.setState({
            notes: getNotes(),
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
                <SearchForm keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                <h2 className="section-header">My Notes</h2>
                {notes.length > 0 ? (
                    <div className="notes-grid">
                        <NotesCard notes={notes} onDelete={this.onDeleteEventHandler}
                                   onArchive={this.onArchiveEventHandler}/>
                        {(this.state.keyword === '') ?
                            <Link to="/add" className="notes-card add-button"><MdAddCircleOutline/> Add
                                Note</Link> : null
                        }
                    </div>
                ) : (
                    <p className="no-data">No Data</p>
                )}
            </section>
        );
    }
}

export default HomePageWrapper;