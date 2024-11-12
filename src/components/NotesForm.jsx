import React from 'react';

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
                body: event.target.value
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
                    <textarea
                        placeholder="Body"
                        value={this.state.body}
                        onChange={this.onBodyChangeEventHandler}
                        required
                    />
                    <span className="body-count">{this.state.body.length}</span>
                </div>
                <button type="submit">Add a Note</button>
            </form>
        )
    }
}

export default NotesForm;