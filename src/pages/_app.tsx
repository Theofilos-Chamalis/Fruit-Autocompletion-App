import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppLayout from '../layouts/AppLayout';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

// Create a QueryClient instance
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </MantineProvider>
    </QueryClientProvider>
  );
}
