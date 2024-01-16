import React from "react";

interface ProjectCardProps {
    title?: string,
    categories?: string[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, categories }) => {
    return (
        <div className={'project-card'}>
            <div className={'project-card-image'}>

            </div>
            <div className={'project-card-body'}>
                <h3 className={'project-card-body-title'}>{title}</h3>
                <div className={'project-card-body-categories'}>
                    {categories?.map((category) => {
                        return (
                            <p key={category.toString()} className={'project-card-body-category'}>{category}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;