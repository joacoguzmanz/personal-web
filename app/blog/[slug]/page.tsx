import { getPostAndMorePosts } from '@/lib/api';
import Link from 'next/link';

const BlogPage = async ({ params }: any) => {
    const testing = await getPostAndMorePosts(params.slug, 'SLUG');
    const fetchedCategories = testing.post.categories.edges;
    console.log(fetchedCategories);

    return (
        <div style={{margin: '200px 0 0 0'}}>
            <h1>{testing.post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: testing.post.content }} />
            {fetchedCategories.map((category: any, index: any) => {
                return (
                    <Link style={{margin: '0 0 0 20px'}} key={index} href={`/category/${category.node.slug}`}>{category.node.name}</Link>
                )
            })}
        </div>
    );
}

export default BlogPage;