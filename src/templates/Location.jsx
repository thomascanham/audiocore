import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LocationStyled = styled.div`
  padding-top: 60px;

  h2 {
    padding-bottom: 30px;
  }
`;

export const query = graphql`
  query($slug: String!) {
    city: contentfulCity(slug: { eq: $slug }) {
      title
      description
    }
  }
`;

export default function Location({ data: { city } }) {
  return (
    <LocationStyled className="container">
      <h2>{city.title}</h2>
      <p>{city.description}</p>
    </LocationStyled>
  );
}

Location.propTypes = {
  data: PropTypes.object.isRequired,
};
