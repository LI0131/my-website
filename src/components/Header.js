import React from 'react';
import {
    PageHeader
} from '@patternfly/react-core';
import Navigation from './Navigation';

const Header = props => {
    const logoProps = {
        href: '/v1/home',
        target: '_blank'
    };

    return (
        <PageHeader logo="Liam McCann" logoProps={logoProps} topNav={<Navigation {...props}/>}/>
    )
}

export default Header;