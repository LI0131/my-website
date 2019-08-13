import React from 'react';
import Layer from './DescriptionLayer';
import Box from './DescriptionBox';

export default props => {
    return (
        <Layer {...props}>
            <Box {...props}/>
        </Layer>
    )
}