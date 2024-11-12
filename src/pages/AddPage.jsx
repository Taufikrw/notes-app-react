import React from "react";
import NotesForm from "../components/NotesForm.jsx";
import {useNavigate} from "react-router-dom";
import {addNotes} from "../utils/data.js";

function AddPage() {
    const navigate = useNavigate();

    function onAddNoteHandler(note) {
        addNotes(note);
        navigate("/");
    }

    return (
        <div>
            <h2 className="section-header">Add a Note</h2>
            <NotesForm addNotes={onAddNoteHandler} />
        </div>
    );
}

export default AddPage;