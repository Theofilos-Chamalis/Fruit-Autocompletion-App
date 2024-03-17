import { FunctionComponent, ReactElement } from 'react';
import Head from 'next/head';

interface AppLayoutProps {
  children: ReactElement;
}

// Basic layout wrapper for the app, which could include a navbar, the head (for including meta tags),
// and the children pages which it wraps.
const AppLayout: FunctionComponent<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Only1 App</title>
        <meta
          name='description'
          content='A next.js based frontend application that uses the Shadcn, RadixUI, TailwindCSS and React Query to showcase an autocomplete input field'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </>
  );
};

export default AppLayout;
