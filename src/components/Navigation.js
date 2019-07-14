import React from 'react';
import {
    Nav,
    NavList,
    NavItem,
} from '@patternfly/react-core';
import { setActiveItem } from '../actions';
import { ABOUT_ITEM, HOME_ITEM } from '../AppConstants';

const clickHandler = (props, item, url) => {
    props.dispatch(setActiveItem(item));
    props.history.push(url);
};

const Navigation = props => {
    return (
        <Nav>
            <NavList>
                <NavItem
                    to='/v1/home'
                    itemId={HOME_ITEM}
                    preventDefault
                    isActive={props.activeItem === HOME_ITEM}
                    onClick={ () => clickHandler({...props}, HOME_ITEM, '/v1/home') }
                >
                    Home
                </NavItem>
                {/* <NavItem 
                    to='/v1/about'
                    itemId={ABOUT_ITEM}
                    preventDefault
                    isActive={props.activeItem === ABOUT_ITEM}
                    onClick={ () => clickHandler({...props}, ABOUT_ITEM, '/about') }
                >
                    About
                </NavItem> */}
            </NavList>
        </Nav>
    );
};

export default Navigation;