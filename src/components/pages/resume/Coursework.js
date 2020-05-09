import React from 'react';
import Card from '../../HoverableCard';
import { List } from '../../list';
import { Box, Heading, Markdown } from 'grommet';
import { COMPUTER_SCI_COURSES, MATH_COURSES } from './ResumeConstants';

const Coursework = () => {
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

export default Coursework;