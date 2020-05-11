import './menu.scss';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DropButton } from 'grommet';
import { CaretUp, CaretDown } from 'grommet-icons';

const Menu = ({ items }) => {

    const [isOpen, setOpen] = useState(false);
    
    return <React.Fragment>
        <DropButton 
            className='menu'
            onClick={ () => setOpen(!isOpen) }
        >
            { isOpen ? <CaretUp/> : <CaretDown/> }
        </DropButton>
        { (isOpen && items) && <div>
            {items.map(item => <div> { item } </div>)}
        </div>}
    </React.Fragment>;
};

Menu.propTypes = {
    items: PropTypes.array
};

export default Menu;