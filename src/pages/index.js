import { graphql, Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Heading,
  Container,
  UnorderedList,
  ListItem,
  Tag,
} from '@chakra-ui/react';

const UL = styled(UnorderedList)`
  display: inline-block;
  list-style: none;
  margin-left: 0 !important;
`;

const ListItemStyled = styled(ListItem)`
  list-style: none;
  display: inline-block;
  padding: 16px;

  &:first-child {
    padding-left: 0;
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
    <Container maxW="container.lg" style={{ paddingTop: '60px' }}>
      <Heading as="h2">Our Locations</Heading>
      <UL>
        {data.cities.nodes.map((city) => (
          <ListItemStyled key={city.id}>
            <Link to={`/location/${city.slug}`}>
              <Tag colorScheme="purple">{city.title}</Tag>
            </Link>
          </ListItemStyled>
        ))}
      </UL>
    </Container>
  );
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
};
