import React from 'react';
import Card from '../../HoverableCard';
import { Dash, SOFTWARE_TOOLS, tertiaryStyle } from './AboutConstants';
import { Box, Heading, Paragraph, Markdown } from 'grommet';

const DashedItem = (props) => {
    return (
        <React.Fragment>
            {props.item} <Dash/>
        </React.Fragment>
    )
}

const DashedList = (props) => {
    return props.list.map(item => 
       <DashedItem item={item}/>
    )
}

const P = (props) => {
    return(
        <p style={{display:'inline'}}>
            {props.children}
        </p>
    )
}

export default props => {
    return (
        <Box pad='medium'>
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
                    <DashedList list={SOFTWARE_TOOLS}/>
                </Paragraph>
                <Markdown>
                    **Spoken Language**
                </Markdown>
                <p> German (Intermediate) </p>
            </Card>
        </Box>
    );
};