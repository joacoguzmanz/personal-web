import Link from "next/link";

const Navbar = () => {
    return (
        <nav className='jg-navbar'>
            <div className='jg-navbar-left'>
                <Link href={'/'}>Joaquin Guzmán</Link>
            </div>

            <div className='jg-navbar-middle'>
                <p>Available for work</p>
            </div>

            <div className='jg-navbar-right'>
                <Link href={'#'}>About</Link>
                <Link href={'#'}>Blog</Link>
                <Link href={'#'}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;