import React, { useState } from 'react';
import { Box } from 'grommet';
import { getColor } from '../AppConstants';

export default function HoverableCard(props) {

    const [isHovered, setHover] = useState(false);
    const [colors, setColor] = useState(getColor());

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
                {props.children}
            </Box>
        </React.Fragment>
    )
}