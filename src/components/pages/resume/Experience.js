import React from 'react';
import Card from '../../HoverableCard';
import { Box, Heading } from 'grommet';
import Description from '../../description';
import { ALLERGY_PARTNERS_INFO, SUMMER_RESEARCH_INFO } from './ResumeConstants';

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
                    visible={ props.hash === '#RedHat' ? true : false }
                    {...props}
                />
                <Description
                    title='Web App Test Case Generation'
                    place='Washington and Lee University'
                    startdate='May 2018'
                    enddate='September 2018'
                    position='Summer Research Scholar'
                    items={ SUMMER_RESEARCH_INFO }
                    visible={ props.hash === '#WebAppTestCaseGeneration' ? true : false }
                    {...props}
                />
                <Description
                    title='Allergy Partners'
                    place='Asheville, NC'
                    startdate='May 2017'
                    enddate='August 2017'
                    position='Software Development Analyst'
                    items={ ALLERGY_PARTNERS_INFO }
                    visible={ props.hash === '#AllergyPartners' ? true : false }
                    {...props}
                />
            </Card>
        </Box>
    );
};