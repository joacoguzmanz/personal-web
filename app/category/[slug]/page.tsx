import { getAllPostWithCategory } from '@/lib/api';
import Link from 'next/link';

const Categories = async ({ params }: any) => {

    const allPosts = await getAllPostWithCategory(params.slug);

    return (
        <div style={{margin: '200px'}}>
            <h1 style={{margin: '0 0 40px 0'}}>{allPosts[0].node.categories.edges[0].node.name}</h1>
            {allPosts.map((post: any, index: any) => {
                return (
                    <Link style={{display: 'block', margin: '0 0 30px 0'}} href={`/blog/${post.node.slug}`} key={index}>
                        {post.node.title}
                        <div>{post.node.categories.edges[0].node.name}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Categories;