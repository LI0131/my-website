import React from 'react';
import Card from '../../HoverableCard';
import { Box, Heading } from 'grommet';
import Description from '../../description';

export default props => {
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
                    items={[]}
                    visible={ props.hash === '#MockConvention' ? true : false }
                    {...props}
                />
                <Description
                    title='Robotics Club'
                    startdate='October 2017'
                    enddate='present'
                    place='Washington and Lee University'
                    items={[]}
                    visible={ props.hash === '#RoboticsClub' ? true : false }
                    {...props}
                />
            </Card>
        </Box>
    );
};