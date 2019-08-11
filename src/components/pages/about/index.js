import React from 'react';
import StackGrid from 'react-stack-grid';
import Education from './Education';
import Skills from './Skills';
import Coursework from './Coursework';
import Experience from './Experience';

export default props => {
    return(
        <StackGrid columnWidth='33%'>
            <Education gridArea='education'/>
            <Skills gridArea='skills'/>
            <Coursework gridArea='coursework'/>
            <Experience gridArea='experience'/>
        </StackGrid>
    );
}