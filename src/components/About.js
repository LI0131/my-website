import React from 'react';
import Card from './HoverableCard';
import { Box, Text } from 'grommet';

export default props => {

    return(
        <Box
            align='center'
            overflow="auto"
            pad="xlarge"
            align="center"
        >
            <Card>
                <Text align='center' size='medium'>
                    I am a senior Computer Science major and German Minor at
                    Washington and Lee University.
                </Text>
            </Card>
        </Box>
    );
}