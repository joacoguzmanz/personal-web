import { getAllPostWithCategory } from '@/lib/api';
import Link from 'next/link';
import BlogTile from '@/components/BlogTile';

const Categories = async ({ params }: any) => {

    const allPosts = await getAllPostWithCategory(params.slug);

    return (
        <main className='jg-category'>
            <div className='jg-container'>
                <h1 className='jg-heading-extra'>{params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} articles</h1>
                {allPosts.map((post: any, index: any) => {
                    return (
                        <BlogTile key={index} title={post.node.title} categories={post.node.categories.edges} slug={`/blog/${post.node.slug}`} />
                    )
                })}
            </div>
        </main>
    )
}

export default Categories;