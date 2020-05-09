import React from 'react';
import StackGrid from 'react-stack-grid';
import Education from './Education';
import Skills from './Skills';
import Coursework from './Coursework';
import Experience from './Experience';
import Header from '../../Header';
import { useWindowDimensions, getColumnWidth, getPageStart } from '../../../AppConstants';
import { Box } from 'grommet';
import Extracurricular from './Extracurricular';

const About = () => {

    const windowWidth = useWindowDimensions();
    const columnWidth = getColumnWidth(windowWidth);
    const pageStart = getPageStart(windowWidth);

    return(
        <Box>
            <Header/>
            <StackGrid columnWidth={columnWidth} style={{ marginTop: pageStart }}>
                <Education />
                <Experience />
                <Skills />
                <Coursework />
                <Extracurricular />
            </StackGrid>
        </Box>
    );
}

export default About;