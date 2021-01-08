import React from 'react'
import Project from './layout/Project'
import RecentProjectsData from './data/data';

const Projects = () => {
    return (
        <section className="projects">
            {
                RecentProjectsData.map((data, index) => {
                    console.log(data)
                    return <Project key={index} layout={index % 2 === 0 ? 'right' : 'left'} data={data}/>
                })
            }
        </section>
    )
}

export default Projects
