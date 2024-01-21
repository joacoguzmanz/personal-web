'use client'

import Link from 'next/link';
import HamMenu from '@/components/HamMenu';
import { useContext, useEffect } from 'react';
import { HamButtonContext, MenuStateContext } from '@/context/menuContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const { setMenuState } = useContext(MenuStateContext);
    const { setButtonState } = useContext(HamButtonContext);

    const resetMenu = () => {
        setMenuState('');
        setButtonState('');
    }

    useEffect(() => {
        const showAnim = gsap.from('.jg-header', {
            yPercent: -100,
            paused: true,
            duration: 0.2,
        }).progress(1);

        ScrollTrigger.create({
            start: "top+=200",
            end: 99999,
            onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse();
            }
        });
    }, []);

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