import React from 'react';
import styled from 'styled-components';

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
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="container">
        <h1>AudioC0RE!</h1>
      </div>
    </HeaderStyles>
  );
}
