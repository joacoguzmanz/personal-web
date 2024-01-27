'use client'

import { usePathname } from 'next/navigation'

const BlogPage = () => {
    const pathname = usePathname();

    return (
        <>Current pathname: {pathname}</>
    );
}

export default BlogPage;