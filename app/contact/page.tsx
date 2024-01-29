import Image from 'next/image';

const Contact = () => {
    return (
        <section className='jg-contact'>
            <div className="jg-container jg-contact-container">
                <div className='jg-contact-left'>
                    <h1 className='jg-heading-1 jg-contact-title'>Want to leave a message?</h1>
                    <p className='jg-text-1 jg-contact-body'>Maybe you are looking to start a project
                        or you need a developer, I’m happy to listen from you.
                    </p>
                    <a className='jg-contact-mail' href={'mailto:joaquin@nuitstudio.com'}>joaquin@nuitstudio.com</a>

                    <ul className='jg-socials'>
                        <li className='jg-socials-icon'>
                            <a href={'#'} target={'_blank'}>
                                <img src={'/instagram.svg'} alt={'Instagram logo'}/>
                            </a>
                        </li>
                        <li className='jg-socials-icon'>
                            <a href={'#'} target={'_blank'}>
                                <img src={'/linkedin.svg'} alt={'LinkedIn logo'}/>
                            </a>
                        </li>
                        <li className='jg-socials-icon'>
                            <a href={'#'} target={'_blank'}>
                                <img src={'/github.svg'} alt={'GitHub logo'}/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="jg-contact-right">
                    <div className="jg-contact-right-image">
                    <Image src={'/barcelona.webp'} fill={true} alt={'Image from Barcelona'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;