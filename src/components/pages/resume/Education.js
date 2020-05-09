import React from 'react';
import Card from '../../HoverableCard';
import { Box, Heading, Paragraph, Markdown } from 'grommet';
import { tertiaryStyle } from '../../../AppConstants';

const Education = () => {
    return (
        <Box pad='medium'>
            <Card>
                <Heading>
                    Education
                </Heading>
                <Markdown>
                    **Washington and Lee University** | Grad. May, 2020
                </Markdown>
                <Paragraph>
                    BS in Computer Science with a minor in German
                </Paragraph>
                <Markdown style={tertiaryStyle}>
                    _GPA: 3.67/4.0 | Major GPA: 3.81/4.0_
                </Markdown>
            </Card>
        </Box>
    );
};

export default Education;