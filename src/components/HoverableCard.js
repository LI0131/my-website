import React, { useState } from 'react';
import { Box, Button } from 'grommet';
import { getColor } from '../AppConstants';
import PropTypes from 'prop-types';

const HoverableCard = ({ children, isClickable, url }) => {

    const [isHovered, setHover] = useState(false);
    const colors = getColor();

    return <React.Fragment>
        <Button href={ isClickable && url } style={{ textDecoration: 'none' }}>
            <Box
                animation={ isHovered && isClickable && { type: 'pulse', size: 'small' }}
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
        </Button>
    </React.Fragment>
};

HoverableCard.propTypes = {
    children: PropTypes.node,
    isClickable: PropTypes.bool,
    url: PropTypes.string
};

export default HoverableCard;