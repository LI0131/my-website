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
                <Text align='center' size='large'>
                    mccannw20@mail.wlu.edu
                </Text>
            </Card>
        </Box>
    );
}