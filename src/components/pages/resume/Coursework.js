import React from 'react';
import Card from '../../HoverableCard';
import { Box, Heading, Markdown } from 'grommet';
import { COMPUTER_SCI_COURSES, MATH_COURSES } from './AboutConstants';

const Item = (props) => {
    return (
        <li> {props.item} </li>
    );
};

const List = (props) => {
    return props.items.map(item => 
        <React.Fragment>
            <Item item={item}/>
        </React.Fragment>
    );
};

export default props => {
    return (
        <Box pad='medium'>
            <Card>
                <Heading>
                    Coursework
                </Heading>
                <Markdown>
                    **Computer Science**
                </Markdown>
                <ul>
                    <List items={COMPUTER_SCI_COURSES}/>
                </ul>
                <Markdown>
                    **Mathematics**
                </Markdown>
                <ul>
                    <List items={MATH_COURSES}/>
                </ul>
            </Card>
        </Box>
    );
};