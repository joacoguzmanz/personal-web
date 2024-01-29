import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='jg-footer'>
            <div className="jg-footer-container">
                <div className="jg-footer-up">
                    <div className="jg-footer-text">
                        <h3>Joaquin Guzmán</h3>
                        <p>Frontend developer and web designer based in Barcelona</p>
                        <a href={'#'}>joaquin@nuitstudio.com</a>
                    </div>

                    <div className="jg-footer-links">
                        <div className="jg-footer-links-col">
                            <h4 className='jg-footer-links-title'>Menu</h4>
                            <ul>
                                <li><Link href={'/about'}>About</Link></li>
                                <li><Link href={'/blog'}>Blog</Link></li>
                                <li><Link href={'/contact'}>Contact</Link></li>
                            </ul>
                        </div>

                        <div className="jg-footer-links-col">
                            <h4 className='jg-footer-links-title'>Socials</h4>
                            <ul>
                                <li><a href="#">GitHub</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="jg-footer-down">

                </div>
            </div>
        </footer>
    )
}

export default Footer;