import React from 'react';
import StackGrid from 'react-stack-grid';
import Education from './Education';
import Skills from './Skills';
import Coursework from './Coursework';
import Experience from './Experience';
import Header from '../../Header';
import { 
    MAP_STATE_TO_PROPS, useWindowDimensions,
    getColumnWidth, getPageStart, useLocationHash
} from '../../../AppConstants';
import { connect } from 'react-redux';
import { Box } from 'grommet';
import Extracurricular from './Extracurricular';

function About(props) {

    const windowWidth = useWindowDimensions();
    const hash = useLocationHash(props.history);
    const columnWidth = getColumnWidth(windowWidth);
    const pageStart = getPageStart(windowWidth);

    return(
        <Box>
            <Header {...props}/>
            <StackGrid columnWidth={columnWidth} style={{ marginTop: pageStart }}>
                <Education />
                <Experience {...props} hash={hash}/>
                <Skills />
                <Coursework />
                <Extracurricular {...props} hash={hash}/>
            </StackGrid>
        </Box>
    );
}

export default connect(MAP_STATE_TO_PROPS)(About);