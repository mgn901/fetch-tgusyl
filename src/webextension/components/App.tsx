import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { FC } from 'react';
import Page from './Page';

const queryClient = new QueryClient();

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <Page />
  </QueryClientProvider>
);

export default App;
