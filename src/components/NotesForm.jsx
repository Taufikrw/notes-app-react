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
                    title: event.target.value,
                    titleLength: event.target.value.length
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
            <form className="notes-input" onSubmit={this.onSubmitEventHandler}>
                <p className="char-left">Char left: {50 - this.state.titleLength}</p>
                <input className="title-form" type="text" placeholder="Title" value={this.state.title}
                       onChange={this.onTitleChangeEventHandler}/>
                <input className="body-form" type="text" placeholder="Body" value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                <button className="submit-button" type="submit">Submit</button>
            </form>
        )
    }
}

export default NotesForm;