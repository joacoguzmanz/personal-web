'use client'

import { usePathname } from 'next/navigation'

const BlogPost = () => {
    const pathname = usePathname();

    return (
        <>Current pathname: {pathname}</>
    );
}

export default BlogPost;