import React from 'react';
import Card from '../../HoverableCard';
import StackGrid from 'react-stack-grid';
import { Box, Text } from 'grommet'
import { Github } from 'grommet-icons'
import Header from '../../Header';
import { MAP_STATE_TO_PROPS, useWindowDimensions, getColumnWidth } from '../../../AppConstants';
import { connect } from 'react-redux';

function Projects(props) {

    const windowWidth = useWindowDimensions();
    const columnWidth = getColumnWidth(windowWidth);

    return(
        <Box>
            <Header {...props}/>
            <StackGrid columnWidth={columnWidth}>
                <Box pad='medium'>
                    <Card>
                        <a href='https://github.com/LI0131'>
                            <Github/>
                        </a>
                        <Text size='large'>
                            Find me on Github.
                        </Text>
                    </Card>
                </Box>
            </StackGrid>
        </Box>
    );
}

export default connect(MAP_STATE_TO_PROPS)(Projects);