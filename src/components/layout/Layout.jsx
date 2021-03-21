import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GlobalStyle from '../../styles/GlobalStyle';
import Header from './Header';

const LayoutStyled = styled.div`
  width: 100vw;
`;

export default function Layout({ children }) {
  return (
    <LayoutStyled>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </LayoutStyled>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
