import React, { useState } from "react";


function Header({onDarkModeClick}) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    );
}

export default Header;
