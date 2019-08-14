import React from 'react';
import Card from '../../HoverableCard';
import { SOFTWARE_TOOLS } from './ResumeConstants';
import { tertiaryStyle, Dash } from '../../../AppConstants';
import { Box, Heading, Markdown } from 'grommet';

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

const Div = (props) => {
    return(
        <div style={{display:'inline'}}>
            {props.children}
        </div>
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
                <Div>
                    <Div> {'Proficient '} </Div> 
                    <Div> ... Java <Dash/> Python <Dash/> Javascript (JSX ES6) <Dash/> SQL </Div>
                </Div>
                <Div>
                    <Div> {'Basic '} </Div> 
                    <Div> ... Bash <Dash/> C <Dash/> Swift <Dash/> Haskell <Dash/> Erlang <Dash/> PHP </Div>
                </Div>
                <Div>
                    <Div> {'Operating Systems '}</Div>
                    <Div> ... macOS <Dash/> Windows <Dash/> RHEL <Dash/> Fedora </Div>
                </Div>
                <Markdown>
                    **Software Tools**
                </Markdown>
                <div style={tertiaryStyle}>
                    <DashedList list={SOFTWARE_TOOLS}/>
                </div>
                <Markdown>
                    **Spoken Language**
                </Markdown>
                <Div> German (Intermediate) </Div>
            </Card>
        </Box>
    );
};