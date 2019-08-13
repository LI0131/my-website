import React from 'react';
import Card from '../../HoverableCard';
import { Dash, tertiaryStyle, primaryStyle } from './AboutConstants';
import { Box, Heading } from 'grommet';

const ExtraDescription = (props) => {
    return (
        <p style={{textAlign: 'center'}}>
            <p style={primaryStyle}> {props.title} {props.position ?
                <p style={{display: 'inline'}}> <Dash/> {props.position} </p> :
                '' } </p>
            <p style={tertiaryStyle}> {props.startdate} - {props.enddate} <Dash/> {props.place} </p>
        </p>
    )
}

export default props => {
    return (
        <Box pad='medium'>
            <Card>
                <Heading>
                    Extracurricular
                </Heading>
                <ExtraDescription
                    title='Mock Convention'
                    position='Meta Data Manager'
                    startdate='February 2018'
                    enddate='present'
                    place='Washington and Lee University'
                />
                <ExtraDescription
                    title='Robotics Club'
                    startdate='October 2017'
                    enddate='present'
                    place='Washington and Lee University'
                />
            </Card>
        </Box>
    );
};