import React from 'react';
import Card from '../../HoverableCard';
import StackGrid from 'react-stack-grid';
import { Box, Text } from 'grommet'
import { Github } from 'grommet-icons'
import Header from '../../Header';
import { useWindowDimensions, getColumnWidth, getPageStart } from '../../../AppConstants';

const Projects = () => {

    const windowWidth = useWindowDimensions();
    const columnWidth = getColumnWidth(windowWidth);
    const pageStart = getPageStart(windowWidth);

    return(
        <Box>
            <Header/>
            <StackGrid columnWidth={columnWidth} style={{ marginTop: pageStart }}>
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

export default Projects;