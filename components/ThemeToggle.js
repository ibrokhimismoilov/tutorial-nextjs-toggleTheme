import React, { useState } from 'react'

const ThemeToggle = () => {
    const [toggle, setToggle] = useState(false);

    const changeTheme = () => {
        setToggle(p => !p);
        if (toggle) {
            document.querySelector("body").classList.add("dark")
        } else {
            document.querySelector("body").classList.remove("dark")
        }
    }

    return (
        <button className='toggle-btn' onClick={changeTheme}>
            {
                !toggle ? "light" : "dark"
            } mode
        </button>
    )
}

export default ThemeToggle
