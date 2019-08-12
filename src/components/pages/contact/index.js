import React from 'react';
import Card from '../../HoverableCard';
import StackGrid from 'react-stack-grid';
import { Box, Text } from 'grommet';
import Header from '../../Header';
import { MAP_STATE_TO_PROPS } from '../../../AppConstants';
import { connect } from 'react-redux';

function Contact(props) {
    return(
        <Box>
            <Header {...props}/>
            <StackGrid columnWidth='50%'>
                <Box pad='medium'>
                    <Card>
                        <Text size='large'>
                            mccannw20@mail.wlu.edu
                        </Text>
                    </Card>
                </Box>
            </StackGrid>
        </Box>
    );
}

export default connect(MAP_STATE_TO_PROPS)(Contact);