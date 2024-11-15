import React from "react";
import {archiveNotes, deleteNotes, editNote, getNoteById, getNotes} from "../utils/data.js";
import {useNavigate, useParams} from "react-router-dom";
import parser from "html-react-parser";
import {MdOutlineRemoveCircleOutline, MdOutlineArchive } from "react-icons/md";
import {showFormattedDate} from "../utils/formattedDate.js";

function DetailPageWrapper() {
    const {id} = useParams()
    const navigate = useNavigate();

    return <DetailPage id={Number(id)} navigate={navigate}/>;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNoteById(props.id),
            body: getNoteById(props.id).body,
        };

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onDeleteEventHandler(id) {
        deleteNotes(id);
        this.setState({
            notes: getNotes(),
        });
        this.props.navigate('/');
    }

    onArchiveEventHandler(id) {
        archiveNotes(id);
        this.setState({
            notes: getNotes(),
        })
        this.props.navigate('/archive');
    }

    onBodyChangeHandler(event) {
        this.setState({
            body: event.target.innerHTML
        });
    }

    onSubmitEventHandler(id) {
        editNote({
            id: id,
            body: this.state.body,
        });
        this.setState({
            note: getNoteById(id),
        })
        this.props.navigate('/');
    }

    render() {
        if (!this.state.note) {
            return <p className="not-found">404 Not Found!</p>;
        }

        return (
            <section>
                <div className="detail-container">
                    <h1>{this.state.note.title}</h1>
                    <div
                        className="detail-body"
                        onInput={this.onBodyChangeHandler}
                        contentEditable
                    >
                        {parser(this.state.note.body)}
                    </div>
                    <span>Created at {showFormattedDate(this.state.note.createdAt)}</span>
                </div>
                <div className="detail-action">
                    <button onClick={() => this.onDeleteEventHandler(this.state.note.id)}><MdOutlineRemoveCircleOutline />Delete</button>
                    <button onClick={() => this.onArchiveEventHandler(this.state.note.id)}><MdOutlineArchive />Archive</button>
                    <button onClick={() => this.onSubmitEventHandler(this.state.note.id)}>Submit</button>
                </div>
            </section>
        );
    }
}

export default DetailPageWrapper;