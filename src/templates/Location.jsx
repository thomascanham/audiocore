import { graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Container, Text } from '@chakra-ui/react';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: 100vw;
  max-height: 400px;
  overflow: hidden;
`;

export const query = graphql`
  query($slug: String!) {
    city: contentfulCity(slug: { eq: $slug }) {
      title
      description

      featuredImage {
        description
        gatsbyImageData(
          formats: AUTO
          layout: FULL_WIDTH
          quality: 100
          placeholder: BLURRED
        )
      }
    }
  }
`;

export default function Location({ data: { city } }) {
  const image = getImage(city.featuredImage);
  const src = getSrc(city.featuredImage);

  return (
    <>
      {city.featuredImage ? (
        <ImageWrapper>
          <GatsbyImage
            image={image}
            alt={city.featuredImage.description}
            src={src}
          />
        </ImageWrapper>
      ) : (
        ''
      )}

      <Container maxW="container.lg" style={{ paddingTop: '60px' }}>
        <Heading as="h2" style={{ paddingBottom: '30px' }}>
          {city.title}
        </Heading>
        <Text>{city.description}</Text>
      </Container>
    </>
  );
}

Location.propTypes = {
  data: PropTypes.object.isRequired,
};
