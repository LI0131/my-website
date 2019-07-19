import React, { useState } from 'react';
import { Grommet, Box, Text, Tab, Tabs } from 'grommet';
import { Github } from 'grommet-icons';
import { grommet } from "grommet/themes";

function MainPage() {

    const [isHovered, setHover] = useState(false)

    return (
        <Grommet theme={grommet}>
            <Box align="center" pad="large">
                <Text size='48pt'> Liam McCann </Text>
            </Box>
            <Box fill>
                <Tabs flex>
                    <Tab title="Home">
                        <Box
                            align='center'
                            overflow="auto"
                            pad="xlarge"
                            align="center"
                        >
                            <Text align='center' size='xlarge'>
                                Welcome to my Website
                            </Text>
                            <Text align='center' size='medium'>
                                More to come soon.
                            </Text>
                        </Box>
                    </Tab>
                    <Tab title="About">
                        <Box
                            align='center'
                            overflow="auto"
                            pad="xlarge"
                            align="center"
                        >
                            <Text align='center' size='medium'>
                                I am a senior Computer Science major and German Minor at
                                Washington and Lee University.
                            </Text>
                        </Box>
                    </Tab>
                    <Tab title="Projects">
                        <Box
                            align='center'
                            overflow="auto"
                            pad="xlarge"
                            align="center"
                        >
                            <a href='https://github.com/LI0131'>
                                <Github/>
                            </a>
                            <Text align='center' size='large'>
                                Find me on Github.
                            </Text>
                        </Box>
                    </Tab>
                    <Tab title="Contact">
                        <Box
                            align='center'
                            overflow="auto"
                            pad="xlarge"
                            align="center"
                        >
                            <Text align='center' size='large'>
                                mccannw20@mail.wlu.edu
                            </Text>
                        </Box>
                    </Tab>
                </Tabs>
            </Box>
        </Grommet>
    )
}

export default MainPage;