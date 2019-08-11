import React from 'react';
import { Grommet, Box, Text, Tab, Tabs } from 'grommet';
import { grommet } from "grommet/themes";
import Home from './Home';
import About from './pages/about';
import Projects from './Projects';
import Contact from './Contact';
import { setActiveIndex } from '../actions';
import { connect } from 'react-redux';
import { MAP_STATE_TO_PROPS, INDEX_TO_URL } from '../AppConstants';
 
function MainPage(props) {

    function onActive(index) {
        props.history.push(INDEX_TO_URL[index]);
        props.dispatch(setActiveIndex(index))
    }

    return (
        <Grommet theme={grommet}>
            <Box align="center" pad="large">
                <Text size='48pt'> Liam McCann </Text>
            </Box>
            <Box fill>
                <Tabs flex activeIndex={props.activeIndex} onActive={(index) => onActive(index)}>
                    <Tab title="Home" path='/v1/home'>
                        <Home/>
                    </Tab>
                    <Tab title="About" >
                        <About/>
                    </Tab>
                    <Tab title="Projects">
                        <Projects/>
                    </Tab>
                    <Tab title="Contact">
                        <Contact/>
                    </Tab>
                </Tabs>
            </Box>
        </Grommet>
    )
}

export default connect(MAP_STATE_TO_PROPS)(MainPage);