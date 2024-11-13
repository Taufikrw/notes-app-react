import React from "react";
import {archiveNotes, deleteNotes, getNoteById, getNotes} from "../utils/data.js";
import {useNavigate, useParams} from "react-router-dom";
import parser from "html-react-parser";
import {MdOutlineRemoveCircleOutline, MdOutlineArchive } from "react-icons/md";

function DetailPageWrapper() {
    const {id} = useParams()
    const navigate = useNavigate();

    return <DetailPage id={Number(id)} navigate={navigate}/>;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNoteById(props.id)
        };

        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
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

    render() {
        if (!this.state.note) {
            return <p className="not-found">404 Not Found!</p>;
        }

        return (
            <section>
                <div className="detail-container">
                    <h1>{this.state.note.title}</h1>
                    <p>{parser(this.state.note.body)}</p>
                </div>
                <div className="detail-action">
                    <button onClick={() => this.onDeleteEventHandler(this.state.note.id)}><MdOutlineRemoveCircleOutline />Delete</button>
                    <button onClick={() => this.onArchiveEventHandler(this.state.note.id)}><MdOutlineArchive />Archive</button>
                </div>
            </section>
        );
    }
}

export default DetailPageWrapper;