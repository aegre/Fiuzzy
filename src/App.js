// Libraries
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import AppWrapper from 'components/AppWrapper';
import SearchView from 'views/Search';
import Container from 'components/Container';

const App = () => (
  <AppWrapper>
    <BrowserRouter>
      <Container>
        <SearchView />
      </Container>
    </BrowserRouter>
  </AppWrapper>
);

export default App;
