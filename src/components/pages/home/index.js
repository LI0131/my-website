import React from 'react';
import Card from '../../HoverableCard';
import StackGrid from 'react-stack-grid';
import { Box, Text } from 'grommet';
import Header from '../../Header';
import { 
    MAP_STATE_TO_PROPS, useWindowDimensions, 
    getColumnWidth, getPageStart
} from '../../../AppConstants';
import { connect } from 'react-redux';

function Home(props) {

    const windowWidth = useWindowDimensions();
    const columnWidth = getColumnWidth(windowWidth);
    const pageStart = getPageStart(windowWidth);
    
    return(
        <Box>
            <Header {...props}/>
            <StackGrid columnWidth={columnWidth} style={{ marginTop: pageStart }}>
                <Box pad='medium'>
                    <Card>
                        <Text align='center' size='xlarge'>
                            Welcome to my Website
                        </Text>
                        <Text align='center' size='medium'>
                            More to come soon.
                        </Text>
                    </Card>
                </Box>
            </StackGrid>
        </Box>
    );
}

export default connect(MAP_STATE_TO_PROPS)(Home);