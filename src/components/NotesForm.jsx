import React from 'react';

class NotesForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            };
        });
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
            <form className="notes-input" onSubmit={this.onSubmitEventHandler}>
                <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <input type="text" placeholder="Body" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default NotesForm;