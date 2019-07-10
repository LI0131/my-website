import React from 'react';
import {
  Page, 
  PageHeader, 
  PageSection, 
  PageSectionVariants
} from '@patternfly/react-core';
import '@patternfly/react-core/dist/styles/base.css';

const MainPage = () => {
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

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
