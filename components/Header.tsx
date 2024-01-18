'use client'

import Link from "next/link";
import HamMenu from "@/components/HamMenu";
import { useContext } from "react";
import { HamButtonContext, MenuStateContext } from "@/context/menuContext";

const Header = () => {
    const { setMenuState } = useContext(MenuStateContext);
    const { setButtonState } = useContext(HamButtonContext);

    const resetMenu = () => {
        setMenuState('');
        setButtonState('');
    }

    return (
        <header className='jg-header'>
            <div className="jg-header-container">
                <div className='jg-header-logo jg-header-logo-start'>
                    <Link onClick={resetMenu} className='jg-header-logo-link' href={'/'}>Joaquin Guzmán</Link>
                </div>

                <nav className='jg-header-nav jg-header-nav-start'>
                    <ul className="jg-header-nav-list">
                        <li className="jg-header-nav-list-item">
                            <Link href={'/about'}>About</Link>
                        </li>
                        <li className="jg-header-nav-list-item">
                            <Link href={'/blog'}>Blog</Link>
                        </li>
                        <li className="jg-header-nav-list-item">
                            <Link href={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </nav>

                <HamMenu/>
            </div>
        </header>
    )
}

export default Header;