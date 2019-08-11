import React from 'react';

/*
* Value Definitions
*/

export const SOFTWARE_TOOLS = [
    'Selenium', 'Heroku', 'PostgreSQL', 'React.js', 'Redux',
    'Node.js', 'Git', 'Apache Kafka', 'OpenShift', 'Docker',
    'Kubernetes', 'Swagger', 'SQLachlechmy', 'Asyncio', 'Flask',
    'MS Excel', 'MS Visio'
];

export const COMPUTER_SCI_COURSES = [
    'Programming in Python', 'Computer Organization in C',
    'Software Design in Java', 'Algorithm Design',
    'Database Management', 'Artificial Intelligence (Fall 2019)',
    'Theory of Computation (Fall 2019)'
];

export const MATH_COURSES = [
    'Multivariable Calculus', 'Linear Algebra',
    'Ordinary Differential Equations', 'Calculus on Manifolds',
    'Abstract Algebra', 'Discrete Mathematics'
];

/*
* Style Definitions
*/

export const primaryStyle = {
    fontWeight: 'bold',
    display: 'inline',
    fontStyle: 'normal',
}

export const tertiaryStyle = {
    fontWeight: 'lighter',
    fontStyle: 'italic',
}

/*
* Function Definitions
*/

export const Dash = () => {
    return (
        <div style={primaryStyle}> {" | "} </div>
    )
}