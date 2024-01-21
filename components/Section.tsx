import React from 'react';

interface SectionProps {
    classes?: string[] | string,
    children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ classes, children}) => {
    const classNames = Array.isArray(classes) ? classes.join(' ') : classes;

    return (
        <section className={`jg-section ${classNames ? classNames : ''}`}>
            {/*<div className='jg-container'>*/}
                { children }
            {/*</div>*/}
        </section>
    )
}

export default Section;