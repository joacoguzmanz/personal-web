import Section from "@/components/Section";

const Home = async () => {
  return (
    <main>
        <Section classes={'jg-home-hero'}>
            <div className="jg-container">
                <h1 className="jg-heading-1">I’m Joaquin! Frontend developer and Web Designer based in Barcelona.</h1>
            </div>
        </Section>

        <Section classes={'jg-home-projects-about'}>
            <div className='jg-container'>
                {/*<div className='jg-home-projects-container'>
                    <h2 className='jg-heading-2'>Projects</h2>
                </div>*/}

                <div className='jg-home-about'>
                    <h2 className='jg-heading-2 jg-home-about-title'>About me</h2>
{/*                    <p className='jg-text-1'>Lorem ipsum dolor sit amet consectetur. Rutrum rutrum purus rutrum amet.
                        Molestie ultrices vitae sollicitudin porttitor tempor amet vestibulum massa. Arcu odio ornare
                        lacus nunc risus turpis. Pellentesque lectus lacinia phasellus augue urna egestas nisl ac.</p>*/}
                    <p className='jg-text-1'>
                        I'm a website designer and front-end developer from Buenos Aires currently based in Barcelona.
                        I love to design minimalistic, easy-to-use and SEO friendly websites.
                    </p>
                </div>
            </div>
        </Section>

        <Section classes={'jg-home-blog'}>
            <div className='jg-container'>
                <div className={'jg-home-blog-upper'}>
                    <h2 className='jg-heading-2'>Some insights</h2>
                </div>
                <div className={'jg-home-blog-down'}>

                </div>
            </div>
        </Section>
    </main>
  )
}

export default Home;