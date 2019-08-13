import React from 'react';
import StackGrid from 'react-stack-grid';
import Education from './Education';
import Skills from './Skills';
import Coursework from './Coursework';
import Experience from './Experience';
import Header from '../../Header';
import { 
    MAP_STATE_TO_PROPS, useWindowDimensions,
    getColumnWidth, pageStyle 
} from '../../../AppConstants';
import { connect } from 'react-redux';
import { Box } from 'grommet';

function About(props) {

    const windowWidth = useWindowDimensions();
    const columnWidth = getColumnWidth(windowWidth);

    return(
        <Box>
            <Header {...props}/>
            <StackGrid columnWidth={columnWidth} style={pageStyle}>
                <Education />
                <Skills />
                <Coursework />
                <Experience />
            </StackGrid>
        </Box>
    );
}

export default connect(MAP_STATE_TO_PROPS)(About);