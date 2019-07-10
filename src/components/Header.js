import React, { Component } from 'react';
import {
    Page, 
    PageHeader, 
    PageSidebar, 
    PageSection, 
    PageSectionVariants
} from '@patternfly/react-core';

Header = () => {

    const logoProps = {
        href: 'https://patternfly.org',
        onClick: () => console.log('clicked logo'),
        target: '_blank'
    };
    const Header = (
        <PageHeader logo="Logo" logoProps={logoProps} toolbar="Toolbar" avatar=" | Avatar" topNav="Navigation" />
    );

    return (
        <Page header={Header}>
            <PageSection variant={PageSectionVariants.dark}>
                This is a test
            </PageSection>
        </Page>
    )
}