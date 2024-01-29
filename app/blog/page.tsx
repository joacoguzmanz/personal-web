import { getAllPostsWithSlug, getAllCategories } from '@/lib/api';
import Link from 'next/link';
import Pill from '@/components/Pill';
import BlogTile from '@/components/BlogTile';

const Blog = async () => {

    const posts = await getAllPostsWithSlug();
    const categories = await getAllCategories();

    return (
        <main className='jg-blog'>
            <div className='jg-container'>
                <h1 className='jg-heading-extra'>The Blog</h1>

                <div className='jg-blog-category-bar'>
                    {categories.map((category: any, index: any) => {
                        return (
                            <Link key={index} href={`/blog/category/${category.node.slug}`}>
                                <Pill text={category.node.name} />
                            </Link>
                        )
                    })}
                </div>

                {posts.map((post: any, ind: any) => {
                    return (
                        <BlogTile key={ind} categories={post.node.categories.edges} title={post.node.title} slug={`/blog/${post.node.slug}`} />
                    )
                })}
            </div>
        </main>
    )
}

export default Blog;