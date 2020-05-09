import React, { useState } from 'react';
import { Dash, tertiaryStyle, primaryStyle } from '../../AppConstants';
import { Button, Layer, Box, Text } from 'grommet';
import PropTypes from 'prop-types';
import { List } from '../list';

const Description = ({ title, position, startdate, enddate, place, items }) => {

    const [isVisible, setVisibility] = useState();

    console.error(title);

    return (
        <Box>
            <Button onClick={ () => setVisibility(true)}>
                <p style={{textAlign: 'center'}}>
                    <p style={primaryStyle}> { title } { position ?
                        <p style={{display: 'inline'}}> <Dash/> { position } </p> :
                        '' } </p>
                    <p style={tertiaryStyle}> { startdate } - { enddate } <Dash/> { place } </p>
                </p>
            </Button>
            { isVisible && (
                <Layer
                    onEsc={() => setVisibility(false)}
                    onClickOutside={() => setVisibility(false)}
                >
                    <Box pad='medium'>
                        <Box pad='medium'>
                            <Text align='start' size='32pt'>
                                { title }
                            </Text>
                        </Box>
                        <Box>
                            <Text>
                                <List items={ items }/>
                            </Text>
                        </Box>
                    </Box>
                </Layer>
            )}
        </Box>
    );
};

Description.propTypes = {
    title: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    startdate: PropTypes.string.isRequired,
    enddate: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
};

export default Description;