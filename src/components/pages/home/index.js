import React from 'react';
import { Box } from 'grommet';
import Header from '../../Header';
import Welcome from './Welcome';
import ncBg from '../../../static/images/nc-bg.jpg'

const Home = () => {
    
    return(
        <Box>
            <Header/>
            <Welcome background={ncBg}/>
        </Box>
    );
}

export default Home;