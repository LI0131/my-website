import React from 'react';
import Card from '../../HoverableCard';
import { Box, Heading } from 'grommet';
import Description from '../../description';
import { SUMMER_RESEARCH_INFO, ALLERGY_PARTNERS_INFO } from './ResumeConstants';

export default props => {
    return (
        <Box pad='medium'>
            <Card>
                <Heading>
                    Experience
                </Heading>
                <Description
                    title='Red Hat'
                    place='Raleigh, NC & Remote'
                    startdate='May 2019'
                    enddate='present'
                    position='Software Engineering Intern'
                    items={[]}
                />
                <Description
                    title='Web App Test Case Generation'
                    place='Washington and Lee University'
                    startdate='May 2018'
                    enddate='September 2018'
                    position='Summer Research Scholar'
                    items={ SUMMER_RESEARCH_INFO }
                />
                <Description
                    title='Allergy Partners, LLC.'
                    place='Asheville, NC'
                    startdate='May 2017'
                    enddate='August 2017'
                    position='Software Development Analyst'
                    items={ ALLERGY_PARTNERS_INFO }
                />
            </Card>
        </Box>
    );
};