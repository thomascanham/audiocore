import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeaderStyles = styled.header`
  width: 100vw;
  padding: 30px 0;
  border-bottom: 10px solid rebeccapurple;

  h1 {
    color: white;
    background: rebeccapurple;
    padding: 10px;
    transform: skew(7deg);
    display: inline;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="container">
        <Link to="/">
          <h1>AudioC0RE!</h1>
        </Link>
      </div>
    </HeaderStyles>
  );
}
