import React, { useState } from 'react';
import { Box } from 'grommet';
import { getColor } from '../AppConstants';
import PropTypes from 'prop-types';

const HoverableCard = ({ children }) => {

    const [isHovered, setHover] = useState(false);
    const colors = getColor();

    return (
        <React.Fragment>
            <Box
                pad="medium"
                align="center"
                background={ isHovered ? 
                    { color: colors.hovered, opacity: "strong" } :
                    { color: colors.still }
                }
                onMouseEnter={ () => setHover(true) }
                onMouseLeave={ () => setHover(false) }
                round
                style={{color: '#ffffff'}}
                gap="small"
            >
                { children }
            </Box>
        </React.Fragment>
    );
};

HoverableCard.propTypes = {
    children: PropTypes.node
};

export default HoverableCard;