'use client'

import React, { useContext } from "react";
import { MenuStateContext, HamButtonContext } from "@/context/menuContext";

const HamMenu = () => {
    const { setMenuState } = useContext(MenuStateContext);
    const { buttonState, setButtonState } = useContext(HamButtonContext);

    const openMenu = () => {
        buttonState === 'jg-menu-button-active' ? setButtonState('') : setButtonState('jg-menu-button-active');
        buttonState === 'jg-menu-button-active' ? setMenuState('') : setMenuState('jg-mob-menu-active');
    }

    return (
        <button className={`jg-menu-button ${buttonState} jg-menu-button-start`} onClick={openMenu} aria-label={"Open menu"}>
            <div className="jg-burger">
                <div className="jg-burger-stripe -top"></div>
                <div className="jg-burger-stripe -bottom"></div>
            </div>
        </button>
    )
}

export default HamMenu;