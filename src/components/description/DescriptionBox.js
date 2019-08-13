import React from 'react';
import { Box, Text } from 'grommet';
import List from '../list';

export default props => {
    return (
        <Box pad='medium'>
            <Box pad='medium'>
                <Text align='start' size='32pt'>
                    {props.title}
                </Text>
            </Box>
            <Box>
                <Text>
                    <List items={props.items}/>
                </Text>
            </Box>
        </Box>
    )
};