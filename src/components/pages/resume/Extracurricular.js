import React from 'react';
import Card from '../../HoverableCard';
import { Box, Heading } from 'grommet';
import DescriptionLayer from '../../DescriptionLayer';

export default props => {
    return (
        <Box pad='medium'>
            <Card>
                <Heading>
                    Extracurricular
                </Heading>
                <DescriptionLayer
                    title='Mock Convention'
                    position='Meta Data Manager'
                    startdate='February 2018'
                    enddate='present'
                    place='Washington and Lee University'
                />
                <DescriptionLayer
                    title='Robotics Club'
                    startdate='October 2017'
                    enddate='present'
                    place='Washington and Lee University'
                />
            </Card>
        </Box>
    );
};