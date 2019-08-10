import React from 'react';
import Card from './HoverableCard';
import { Box, Heading, Paragraph, Markdown } from 'grommet';

const tertiaryStyle = {
    fontWeight: 'lighter',
    fontStyle: 'italic'
}

const primaryStyle = {
    fontWeight: 'bold',
    display: 'inline',
    fontStyle: 'normal',
}

const PageSep = () => {
    return (
        <p style={{padding:'10px'}}>
        </p>
    )
}

const Dash = () => {
    return (
        <p style={primaryStyle}>
            {" | "}
        </p>
    )
}

const P = (props) => {
    return(
        <p style={{display:'inline'}}>
            {props.children}
        </p>
    )
}

const ExpDescription = (props) => {
    return (
        <p style={{textAlign: 'center'}}>
            <p style={primaryStyle}> {props.title} <Dash/> {props.position}</p>
            <p style={tertiaryStyle}> {props.startdate} - {props.enddate} <Dash/> {props.place} </p>
        </p>
    )
}

export default props => {

    return(
        <Box
            align='center'
            overflow="auto"
            pad="large"
            align="center"
        >
            <Card>
                <Heading>
                    Education
                </Heading>
                <Markdown>
                    **Washington and Lee University** | Grad. May, 2020
                </Markdown>
                <Paragraph>
                    BS in Computer Science with a minor in German
                </Paragraph>
                <Markdown style={tertiaryStyle}>
                    _GPA: 3.61/4.0 | Major GPA: 3.81/4.0_
                </Markdown>
            </Card>
            <PageSep/>
            <Card>
                <Heading>
                    Skills
                </Heading>
                <Markdown>
                    **Programming Languages**
                </Markdown>
                <P>
                    <P> {'Proficient '} </P> 
                    <P> ... Java <Dash/> Python <Dash/> Javascript (JSX ES6) <Dash/> SQL </P>
                </P>
                <P>
                    <P> {'Basic '} </P> 
                    <P> ... Bash <Dash/> C <Dash/> Swift <Dash/> Haskell <Dash/> Erlang <Dash/> PHP </P>
                </P>
                <P>
                    <P> {'Operating Systems '}</P>
                    <P> ... macOS <Dash/> Windows <Dash/> RHEL <Dash/> Fedora </P>
                </P>
                <Markdown>
                    **Software Tools**
                </Markdown>
                <Paragraph style={tertiaryStyle}>
                    Selenium <Dash/> Heroku <Dash/> PostgreSQL <Dash/> React.js <Dash/> Redux <Dash/> 
                    Node.js <Dash/> Git <Dash/> Apache Kafka <Dash/> Openshift <Dash/> Docker <Dash/> 
                    Kubernetes <Dash/> Swagger <Dash/> SQLalchemy <Dash/> Asyncio <Dash/> Flask <Dash/> 
                    MS Excel <Dash/> MS Visio
                </Paragraph>
                <Markdown>
                    **Spoken Language**
                </Markdown>
                <p> German (Intermediate) </p>
            </Card>
            <PageSep/>
            <Card>
                <Heading>
                    Coursework
                </Heading>
                <Markdown>
                    **Computer Science**
                </Markdown>
                <ul>
                    <li> Programming in Python </li>
                    <li> Computer Organization in C </li>
                    <li> Software Design in Java </li>
                    <li> Algorithm Design </li>
                    <li> Database Management </li>
                    <li> Artificial Intelligence (Fall 2019) </li>
                    <li> Theory of Computation (Fall 2019) </li>
                </ul>
                <Markdown>
                    **Mathematics**
                </Markdown>
                <ul>
                    <li> Multivariable Calculus </li>
                    <li> Linear Algebra </li>
                    <li> Ordinary Differential Equations </li>
                    <li> Calculus on Manifolds </li>
                    <li> Abstract Algebra </li>
                    <li> Discrete Mathematics </li>
                </ul>
            </Card>
            <PageSep/>
            <Card>
                <Heading>
                    Experience
                </Heading>
                <ExpDescription
                    title='Red Hat'
                    place='Raliegh, NC & Remote'
                    startdate='May 2019'
                    enddate='present'
                    position='Software Engineering Intern'
                />
                <ExpDescription
                    title='Web App Test Case Generation'
                    place='Washington and Lee University'
                    startdate='May 2018'
                    enddate='September 2018'
                    position='Summer Research Scholar'
                />
            </Card>
        </Box>
    );
}