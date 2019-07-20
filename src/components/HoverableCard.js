import React, { useState } from 'react';
import { Box } from 'grommet';

export default function HoverableCard(props) {

    const [isHovered, setHover] = useState(false);

    return (
        <React.Fragment>
            <Box
            pad="large"
            align="center"
            background={ isHovered ? 
                { color: "dark-1", opacity: "strong" } :
                { color: "dark-3" }
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