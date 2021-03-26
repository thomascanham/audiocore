/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './src/components/layout/Layout';

export function wrapPageElement({ element, props }) {
  return (
    <ChakraProvider>
      <Layout {...props}>{element}</Layout>
    </ChakraProvider>
  );
}
