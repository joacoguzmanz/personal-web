import React from 'react';

interface PillProps {
    text: string
}

const Pill: React.FC<PillProps> = ({ text }) => {
    return (
        <span className='jg-pill jg-text-xs'>
            { text }
        </span>
    )
}

export default Pill;