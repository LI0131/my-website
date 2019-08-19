import React from 'react';
import { Box } from 'grommet';
import Header from '../../Header';
import { 
    MAP_STATE_TO_PROPS, useWindowDimensions, getPageStart
} from '../../../AppConstants';
import { getSectionSize } from './HomeConstants';
import { connect } from 'react-redux';
import Welcome from './Welcome';
import ncBg from '../../../static/images/nc-bg.jpg'

function Home(props) {

    const windowWidth = useWindowDimensions();
    const pageStart = getPageStart(windowWidth);
    const sectionStyle = getSectionSize(pageStart)
    
    return(
        <Box>
            <Header {...props}/>
            <Welcome background={ncBg} sectionStyle={sectionStyle}/>
        </Box>
    );
}

export default connect(MAP_STATE_TO_PROPS)(Home);