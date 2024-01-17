import Link from "next/link";
import HamMenu from "@/components/HamMenu";

const Header = () => {
    return (
        <header className='jg-header'>
            <div className="jg-header-container">
                <div className='jg-header-logo jg-header-logo-start'>
                    <Link className='jg-header-logo-link' href={'/'}>Joaquin Guzmán</Link>
                </div>

                <nav className='jg-header-nav jg-header-nav-start'>
                    <ul className="jg-header-nav-list">
                        <li className="jg-header-nav-list-item">
                            <Link href={'#'}>About</Link>
                        </li>
                        <li className="jg-header-nav-list-item">
                            <Link href={'#'}>Blog</Link>
                        </li>
                        <li className="jg-header-nav-list-item">
                            <Link href={'#'}>Contact</Link>
                        </li>
                    </ul>
                </nav>

                <HamMenu />
            </div>
        </header>
    )
}

export default Header;