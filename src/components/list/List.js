import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items }) => {
    return items.map(item => 
        <React.Fragment>
            <li> { item } </li>
        </React.Fragment>
    );
};

List.propTypes = {
    items: PropTypes.array.isRequired
};

export default List;