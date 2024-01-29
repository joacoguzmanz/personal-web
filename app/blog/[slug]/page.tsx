import { getPostAndMorePosts } from '@/lib/api';
import Link from 'next/link';
import Pill from '@/components/Pill';

const BlogPage = async ({ params }: any) => {
    const testing = await getPostAndMorePosts(params.slug, 'SLUG');
    const fetchedCategories = testing.post.categories.edges;

    const formattedDate: string = new Date(testing.post.date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    return (
        <div className='jg-blog-article'>
            <div className='jg-container'>
                <header className='jg-blog-article-header'>
                    <div className="jg-blog-article-categories">
                        {fetchedCategories.map((category: any, index: any) => {
                            return (
                                <Link key={index} href={`/blog/category/${category.node.slug}`}>
                                    <Pill text={category.node.name} />
                                </Link>
                            )
                        })}
                    </div>
                    <h1 className='jg-heading-1 jg-blog-article-title'>{testing.post.title}</h1>
                    <p>{formattedDate}</p>
                </header>


                <div className='jg-blog-article-content' dangerouslySetInnerHTML={{ __html: testing.post.content }} />
            </div>
        </div>
    );
}

export default BlogPage;