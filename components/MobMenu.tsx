'use client'

import { MenuStateContext, HamButtonContext } from "@/context/menuContext";
import { useContext } from "react";
import Link from "next/link";

const MobMenu = () => {
    const { menuState, setMenuState } = useContext(MenuStateContext);
    const { setButtonState } = useContext(HamButtonContext);

    const resetMenu = () => {
        setMenuState('');
        setButtonState('');
    }

    return (
        <div className={`jg-mob-menu ${menuState}`}>
            <div className='jg-mob-menu-backdrop'></div>
            <div className='jg-mob-menu-inner'>
                <div className='jg-mob-menu-container jg-mob-menu-content'>
                    <div className='jg-mob-menu-body'>
                        <h3 className='jg-mob-menu-body-title'>Menu</h3>
                        <nav className='jg-mob-menu-body-nav'>
                            <ul className="jg-mob-menu-body-nav-list">
                                <li className='jg-mob-menu-body-nav-list-item'>
                                    <Link onClick={resetMenu} href={'/about'}>About</Link>
                                </li>
                                <li className='jg-mob-menu-body-nav-list-item'>
                                    <Link onClick={resetMenu} href={'/blog'}>Blog</Link>
                                </li>
                                <li className='jg-mob-menu-body-nav-list-item'>
                                    <Link onClick={resetMenu} href={'/contact'}>Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className='jg-mob-menu-footer'>
                        <h3 className='jg-mob-menu-footer-title'>Let's talk</h3>
                        <a href={'mailto:#'} className='jg-mob-menu-footer-link'>joaquin@nuitstudio.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobMenu;