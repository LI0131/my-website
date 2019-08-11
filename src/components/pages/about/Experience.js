import React from 'react';
import Card from '../../HoverableCard';
import { Dash, tertiaryStyle, primaryStyle } from './AboutConstants';
import { Box, Heading } from 'grommet';

const ExpDescription = (props) => {
    return (
        <p style={{textAlign: 'center'}}>
            <p style={primaryStyle}> {props.title} <Dash/> {props.position}</p>
            <p style={tertiaryStyle}> {props.startdate} - {props.enddate} <Dash/> {props.place} </p>
        </p>
    )
}

export default props => {
    return (
        <Box pad='small' gridArea={props.gridArea}>
            <Card>
                <Heading>
                    Experience
                </Heading>
                <ExpDescription
                    title='Red Hat'
                    place='Raleigh, NC & Remote'
                    startdate='May 2019'
                    enddate='present'
                    position='Software Engineering Intern'
                />
                <ExpDescription
                    title='Web App Test Case Generation'
                    place='Washington and Lee University'
                    startdate='May 2018'
                    enddate='September 2018'
                    position='Summer Research Scholar'
                />
            </Card>
        </Box>
    );
};