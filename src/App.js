import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchView from 'views/Search';

const App = () => (
  <BrowserRouter>
    <SearchView />
  </BrowserRouter>
);

export default App;
