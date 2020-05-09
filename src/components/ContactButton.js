import React from 'react';
import { iconStyle } from '../AppConstants';
import PropTypes from 'prop-types';

const ContactButton = ({ children, to }) => {
    return (
        <a href={ to } style={ iconStyle }>
            { children }
        </a>
    );
};

ContactButton.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired
};

export default ContactButton;