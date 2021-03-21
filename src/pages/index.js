import { graphql, Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HomeStyled = styled.div`
  padding-top: 60px;

  h2 {
    padding-bottom: 30px;
  }

  li {
    list-style: none;
    display: inline-block;
    margin: 5px;
    background: rgba(102, 51, 153, 0.1);
    color: rgba(102, 51, 153, 0.7);
    cursor: pointer;
    border-radius: 5px;

    a {
      text-decoration: none;
      color: rgba(102, 51, 153, 0.7);
      padding: 8px;
      display: block;
    }
  }
`;

// graphql query fetches the required data
export const query = graphql`
  query All_CITIES_HOMEPAGE {
    cities: allContentfulCity(sort: { order: ASC, fields: title }) {
      nodes {
        title
        description
        slug
        id
      }
    }
  }
`;

export default function Home({ data }) {
  return (
    <HomeStyled className="container">
      <h2>Home Page</h2>
      <h4>Our Locations</h4>
      <ul>
        {data.cities.nodes.map((city) => (
          <li key={city.id}>
            <Link to={`/location/${city.slug}`}>{city.title}</Link>
          </li>
        ))}
      </ul>
    </HomeStyled>
  );
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
};
