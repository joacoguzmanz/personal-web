import Section from "@/components/Section";
import Link from 'next/link';
import { gsap } from 'gsap';
import BlogPost from '@/components/BlogPost';
import { getAllPostsForHome } from '@/lib/api';

const posts = [
    {title: 'How to design a website in Figma', cats: ['Design', 'Website', 'WordPress']},
    {title: 'Using Next.js to develop a website', cats: ['Branding', 'Typography']},
    {title: 'The title for a blog post here', cats: ['Website', 'Design', 'Development', 'Next', 'Sass']}
];

const Home = async () => {
    const posts = await getAllPostsForHome();

    console.log(posts[0].node.categories.edges);

  return (
    <main>
        <Section classes={'jg-home-hero'}>
            <div className="jg-container">
                <h1 className="jg-heading-extra">I’m Joaquin! Frontend developer and Web Designer based in Barcelona.</h1>
            </div>
        </Section>

        <Section classes={'jg-home-about'}>
            <div className='jg-container'>
                <h2 className='jg-heading-2 jg-home-about-title'>About me</h2>
                <p className='jg-text-1'>
                    I'm a website designer and front-end developer from Buenos Aires currently based in Barcelona.
                    I love to design minimalistic, easy-to-use and SEO friendly websites.
                </p>
            </div>
        </Section>

        <Section classes={'jg-home-blog'}>
            <div className='jg-container'>
                <div className={'jg-home-blog-upper'}>
                    <h2 className='jg-heading-2'>Some insights</h2>
                    <Link href={`/blog}`} className='jg-text-3'>Read all</Link>
                </div>

                <div className={'jg-home-blog-down'}>
                    {posts.map((post: any, index: any) => {
                        console.log(post.node.categories.edges);
                        return (
                            <BlogPost slug={`/blog/${post.node.slug}`} title={post.node.title} key={index} />
                        )
                    })}
                </div>
            </div>
        </Section>
    </main>
  )
}

export default Home;