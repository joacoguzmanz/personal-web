import React from 'react';
import Link from 'next/link';
import Pill from '@/components/Pill';

interface BlogTileProps {
    title: string,
    categories: string[] | any,
    slug: string
}

const BlogTile: React.FC<BlogTileProps> = ({ title, categories, slug }) => {
    return (
        <Link className='jg-blog-tile' href={slug}>
            <h2 className='jg-blog-tile-title'>{title}</h2>
            <div className='jg-blog-tile-categories'>
                {categories?.map((category: any, index:any) => {
                    return (
                        <Pill key={index} text={category.node.name} />
                    )
                })}
            </div>
        </Link>
    )
}

export default BlogTile;