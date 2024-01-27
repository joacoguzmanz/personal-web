import Link from 'next/link';
import React from 'react';
import Pill from '@/components/Pill';

interface BlogPostProps {
    categories?: string[],
    title?: string,
    slug: string
}

const BlogPost: React.FC<BlogPostProps> = ({ slug, title, categories }) => {
    return (
        <Link href={slug} className='jg-blog-post'>
            <div className='jg-blog-post-inner'>
                <div className='jg-blog-post-title'>
                    <h4 className='jg-heading-3'>{title}</h4>
                    <p className="jg-text-3 jg-blog-post-read">
                        Read post
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 14" role="img" aria-hidden="true">
                            <path d="M26.74 12.994l1.015.83 5.316-6.496a.658.658 0 000-.831L27.755 0 26.74.83l4.438 5.425H0v1.313h31.178l-4.438 5.426z"
                                fill="#327D87"></path>
                        </svg>
                    </p>
                </div>
                <ul className="jg-categories">
                    {categories?.map((category, index) => {
                        return (
                            <li key={index} className="jg-category"><Pill text={category} /></li>
                        )
                    })}
                </ul>
            </div>
        </Link>
    )
}

export default BlogPost;