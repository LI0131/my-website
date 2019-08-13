import React, { useState } from 'react';
import { Dash, tertiaryStyle, primaryStyle } from '../../AppConstants';
import { Button, Layer, Box } from 'grommet';

function DescriptionButton(props) {
    return (
        <Button onClick={ () => props.setVisibility(true)}>
            <p style={{textAlign: 'center'}}>
                <p style={primaryStyle}> {props.title} {props.position ?
                    <p style={{display: 'inline'}}> <Dash/> {props.position} </p> :
                    '' } </p>
                <p style={tertiaryStyle}> {props.startdate} - {props.enddate} <Dash/> {props.place} </p>
            </p>
        </Button>
    )
};

export default props => {

    const [isVisible, setVisibility] = useState();

    return (
        <Box>
            <DescriptionButton setVisibility={setVisibility} {...props}/>
            { isVisible && (
                <Layer
                    onEsc={() => setVisibility(false)}
                    onClickOutside={() => setVisibility(false)}
                >
                    {props.children}
                </Layer>
            )}
        </Box>
    );
};