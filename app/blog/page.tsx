import { getAllPostsWithSlug } from '@/lib/api';
import Link from 'next/link';

const Blog = async () => {

    const posts = await getAllPostsWithSlug();

    return (
        <div style={{margin: '200px 0 0 0'}}>
            <h1>Blog Page</h1>
            <div>Categories</div>
            {posts.map((post: any, index: any) => {
                return (
                    <Link style={{display: 'block', margin: '0 0 40px 0'}} href={`/blog/${post.node.slug}`} key={index}>
                        {post.node.title}
                        {post.node.categories.edges.map((category: any, index: any) => {
                            return (
                                <div key={index}>{category.node.name}</div>
                            )
                        })}
                    </Link>
                )
            })}
        </div>
    )
}

export default Blog;