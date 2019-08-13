import React from 'react';

const Item = (props) => {
    return (
        <li> {props.item} </li>
    );
};

export default props => {
    return props.items.map(item => 
        <React.Fragment>
            <Item item={item}/>
        </React.Fragment>
    );
};