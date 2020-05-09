import React from 'react';
import Card from '../../HoverableCard';
import { Box, Heading } from 'grommet';
import { Description } from '../../description';
import { MOCK_CON_INFO, ROBOTICS_INFO } from './ResumeConstants';

const Extracurricular = () => {
    return (
        <Box pad='medium'>
            <Card>
                <Heading>
                    Extracurricular
                </Heading>
                <Description
                    title='Mock Convention'
                    position='Meta Data Manager'
                    startdate='February 2018'
                    enddate='present'
                    place='Washington and Lee University'
                    items={ MOCK_CON_INFO }
                />
                <Description
                    title='Robotics Club'
                    startdate='October 2017'
                    enddate='present'
                    place='Washington and Lee University'
                    items={ ROBOTICS_INFO }
                />
            </Card>
        </Box>
    );
};

export default Extracurricular;