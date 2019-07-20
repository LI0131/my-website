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
                <Text align='center' size='xlarge'>
                    Welcome to my Website
                </Text>
                <Text align='center' size='medium'>
                    More to come soon.
                </Text>
            </Card>
        </Box>
    );
}