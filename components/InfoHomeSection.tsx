import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";

interface projectsTypes {
    title: string,
    categories: string[]
}

const projects: projectsTypes[] = [
    {title: 'InterCom.', categories: ['Branding', 'Web Design']},
    {title: 'AFA Ins Les Corts', categories: ['Web Design']}
];

const infoHomeSection = () => {
    return (
        <section className={'jg-info-container'}>

            <div className={'jg-home-projects'}>
                <h2 className={'jg-home-projects-title'}>Featured projects</h2>
                <div className={'jg-home-projects-container'}>
                    {projects.map((project, key) => {
                        return (
                            <ProjectCard title={project.title} categories={project.categories} key={key} />
                        )
                    })}
                </div>
            </div>

            <div className={'jg-home-about'}>
                <h2 className={'jg-home-about-title'}>About me</h2>
                <p className={'jg-home-about-text'}>
                    Lorem ipsum dolor sit amet consectetur. Rutrum rutrum purus rutrum amet. Molestie ultrices
                    vitae sollicitudin porttitor tempor amet vestibulum massa. Arcu odio ornare lacus nunc
                    risus turpis. Pellentesque lectus lacinia phasellus augue urna egestas nisl ac.
                </p>
                <Button text={'Get to know me'} />
            </div>
        </section>
    )
}

export default infoHomeSection;