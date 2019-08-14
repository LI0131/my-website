import React, { useState, useEffect } from 'react';
import { Dash, tertiaryStyle, primaryStyle } from '../../AppConstants';
import { Button, Layer, Box } from 'grommet';

function DescriptionButton(props) {

    function clickHandler(props){
        props.setVisibility(true);
        props.history.push(`#${props.title.split(' ').join('')}`)
    }

    return (
        <Button onClick={ () => clickHandler({...props})}>
            <div style={{textAlign: 'center', margin: '10px'}}>
                <div style={primaryStyle}> {props.title} {props.position ?
                    <div style={{display: 'inline'}}> <Dash/> {props.position} </div> :
                    '' } </div>
                <div style={tertiaryStyle}> {props.startdate} - {props.enddate} <Dash/> {props.place} </div>
            </div>
        </Button>
    )
};

export default props => {

    const [isVisible, setVisibility] = useState();

    useEffect(() => {
        props.visible ? setVisibility(true) : setVisibility(false);
    }, [props.visible]);

    function clickHandler() {
        setVisibility(false);
        props.history.push(props.history.location.pathname);
    };

    return (
        <Box>
            <DescriptionButton setVisibility={setVisibility} {...props}/>
            { isVisible && (
                <Layer
                    onEsc={() => clickHandler()}
                    onClickOutside={() => clickHandler()}
                >
                    {props.children}
                </Layer>
            )}
        </Box>
    );
};