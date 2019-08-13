import React from 'react';
import { iconStyle } from '../AppConstants';

export default props => {
    return (
        <a href={props.to} style={iconStyle}>
            {props.children}
        </a>
    );
};