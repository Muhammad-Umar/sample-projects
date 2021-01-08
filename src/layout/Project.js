import React from 'react'

const Project = (props) => {
    const {data, layout} = props;

    return (
        <div className={`recent-project project-${layout}`}>
            <div className="recent-project__image">
                <img src={data.image} alt="Channel Slider"/>
                <span className="background-overlay"></span>
            </div>
            <div className="recent-project__text">
                <span className="project-count">{data.index}</span>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <div className="project-technologies">
                    <span className="">{data.technologies}</span>
                </div>
                <div className="actions">
                    <a className="link" href={data.link} rel="noreferrer" target="_blank">Link</a>
                </div>
            </div>
        </div>    
    )
}

export default Project
