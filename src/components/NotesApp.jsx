import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import DetailPage from "../pages/DetailPage.jsx";
import TopBar from "./TopBar.jsx";
import ArchivePage from "../pages/ArchivePage.jsx";
import AddPage from "../pages/AddPage.jsx";

function NotesApp() {
    return (
        <div className="notes-app">
            <header>
                <TopBar />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/notes/:id" element={<DetailPage />} />
                    <Route path="/archive" element={<ArchivePage />} />
                    <Route path="/add" element={<AddPage />} />
                </Routes>
            </main>
        </div>
    )
}

export default NotesApp;