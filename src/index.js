import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import GlobalStyles from './styles';
import Pages from './pages';

const container = document.getElementById('root');

const root = createRoot(container);

// Apollo client instance
const client = new ApolloClient({
  uri: 'https://odyssey-lo-server.herokuapp.com/',
  cache: new InMemoryCache(),
})

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>
);
