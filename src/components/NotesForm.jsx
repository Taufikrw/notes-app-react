import React from 'react';
import PropTypes from "prop-types";

class NotesForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            titleLength: 0,
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        if (event.target.value.length <= 50) {
            this.setState(() => {
                return {
                    title: event.target.value
                };
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.innerHTML
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
    }

    render() {
        return (
            <form className="notes-form" onSubmit={this.onSubmitEventHandler}>
                <div className="form-container">
                    <input
                        type="text"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                        required
                    />
                    <span className="char-left">{50 - this.state.title.length}</span>
                </div>
                <div className="form-container">
                    <div
                        className="textarea-container"
                        onInput={this.onBodyChangeEventHandler}
                        contentEditable
                    />
                    <span className="body-count">{this.state.body.length}</span>
                </div>
                <button type="submit">Add a Note</button>
            </form>
        )
    }
}

NotesForm.propTypes = {
    addNotes: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NotesForm;