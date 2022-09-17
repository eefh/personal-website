import React from "react";
import './Project.css';
const Tag = props => {
    let color = ''
    switch(props.tag) {
        case 'HTML':
            color = 'orange';
            break;
        case 'CSS':
            color = 'blue';
            break;
        case 'JS':
            color = 'yellow';
            break;
        case 'React':
            color = 'blue';
            break;
        case 'Node.js':
            color = 'green';
            break;
        case 'Express.js':
            color = 'blue';
            break;
        case 'MongoDB':
            color = 'green';
            break;
        case 'Redux':
            color = 'purple';
            break;
        case 'Lua':
            color = 'blue';
            break;
    }
    return (
        <div className="Tag">
            <p class={color}><strong>{props.tag}</strong></p>
        </div>
    );
}

export default Tag;