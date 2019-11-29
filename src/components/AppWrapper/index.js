// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --family-sans-serif: 'Roboto', sans-serif; 

  // Main colors
  --primary-color: #03aee6;
  --secondary-color: #2c0184;
  --terciary-color: #fd4191;
  --text-color: #949494;
  --text-color--light: #c9c9c9;

  --background-color: #1a191f;

  // space variables
  --space-100: 4px;
  --space-200: 8px;
  --space-300: 12px;
  --space-400: 16px;
  --space-500: 20px;
  --space-600: 32px;
  --space-700: 80px;
  --space-800: 120px;
  --space-900: 160px;

  --max-app-width: 980px;
}

body {
  font-family: var(--family-sans-serif);
  color: var(--text-color);
  background-color: var(--background-color);
  font-size: .875rem;
}`;


const AppWrapper = ({ children }) => (
  <>
    <GlobalStyle />
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
    </Helmet>
    {children}
  </>
);

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
