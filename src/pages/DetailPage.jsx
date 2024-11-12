import React from "react";
import {getNoteById} from "../utils/data.js";
import {useParams} from "react-router-dom";

function DetailPageWrapper() {
    const { id } = useParams()
    return <DetailPage id={Number(id)}/>;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNoteById(props.id)
        };
    }

    render() {
        if (this.state.note === null) {
            return <p>404 Not Found!</p>;
        }

        return (
            <section>
                <h1>{this.state.note.title}</h1>
            </section>
        );
    }
}

export default DetailPageWrapper;