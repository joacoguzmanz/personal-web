'use client'

import React from "react";

const HamMenu = () => {
    const [menu, setMenu] = React.useState<string>('');

    const openMenu = () => {
        menu === 'jg-menu-button-active' ? setMenu('') : setMenu('jg-menu-button-active');
    }

    return (
        <button className={`jg-menu-button ${menu}`} onClick={openMenu} aria-label={"Open menu"}>
            <div className="jg-burger">
                <div className="jg-burger-stripe -top"></div>
                <div className="jg-burger-stripe -bottom"></div>
            </div>
        </button>
    )
}

export default HamMenu;