import React from "react";
import './Project.css';
import Tag from './Tag';
const Project = props => {
    const langs = props.lang;
    return (
        <div className="Project">
            <img src={props.source}/>
            <div className="tags">
                {langs.map((e, i) => {
                    return <Tag key={i} tag={e}/>
                })}
            </div>
            <p>{props.desc}</p>
            <div className='visit'>
                <a href={props.link} target='_blank'>Visit this site</a>
            </div>
        </div>
    );
}

export default Project;