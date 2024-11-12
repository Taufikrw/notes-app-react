import React from "react";
import Navigation from "./Navigation";

function TopBar() {
    return (
        <div className="top-bar">
            <h1>Notes App</h1>
            <Navigation />
        </div>
    );
}

export default TopBar;