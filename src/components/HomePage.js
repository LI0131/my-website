import React, { Component } from 'react';
import {
    Page, PageSection
} from '@patternfly/react-core';
import { connect } from 'react-redux'
import { MAP_STATE_TO_PROPS } from '../AppConstants';
import Header from './Header';

class HomePage extends Component {
    render() {
        return (
            <Page 
                header={<Header {...this.props}/>}
                isManagedSidebar
            >
                <PageSection style={{height: '100vh'}}>

                </PageSection>
            </Page>
        );
    };
};

export default connect(MAP_STATE_TO_PROPS)(HomePage);