import { getPostAndMorePosts } from '@/lib/api';
import Link from 'next/link';

const BlogPage = async ({ params }: any) => {
    const testing = await getPostAndMorePosts(params.slug, 'SLUG');

    return (
        <div style={{margin: '200px 0 0 0'}}>
            <h1>{testing.post.title}</h1>
            <p>{testing.post.content}</p>
            <Link href={`/categories/${testing.post.categories.edges[0].node.slug}`}>{testing.post.categories.edges[0].node.name}</Link>
        </div>
    );
}

export default BlogPage;