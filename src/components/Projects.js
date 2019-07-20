import React from 'react';
import Card from './HoverableCard';
import { Box, Text } from 'grommet'
import { Github } from 'grommet-icons'

export default props => {

    return(
        <Box
            align='center'
            overflow="auto"
            pad="xlarge"
            align="center"
        >
            <Card>
                <a href='https://github.com/LI0131'>
                    <Github/>
                </a>
                <Text align='center' size='large'>
                    Find me on Github.
                </Text>
            </Card>
        </Box>
    );
}