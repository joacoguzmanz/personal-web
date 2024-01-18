'use client'

import React, { createContext, useState } from "react";

export const MenuStateContext = createContext<any>(null);
export const HamButtonContext = createContext<any>(null);

interface MenuContextProps {
    children: React.ReactNode;
}

const MenuContext: React.FC<MenuContextProps> = ({ children }) => {
    const [menuState, setMenuState] = useState<string>();
    const [buttonState, setButtonState] = useState<string>();

    return (
        <MenuStateContext.Provider value={{menuState, setMenuState}}>
            <HamButtonContext.Provider value={{buttonState, setButtonState}}>
                {children}
            </HamButtonContext.Provider>
        </MenuStateContext.Provider>
    )
}

export default MenuContext;
