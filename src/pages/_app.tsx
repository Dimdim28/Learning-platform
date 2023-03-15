import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { store } from '@/redux/store';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Learning platform</title>
        <meta
          name="description"
          content="Platform with a lot of courses and lessons"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="learning, education, platform, courses"
        />
        <meta property="og:title" content="Learning platform" />
        <meta
          property="og:description"
          content="Platform with a lot of courses and lessons"
        />
        <meta
          property="og:image"
          content="https://thumbs.dreamstime.com/b/ai-machine-learning-hands-robot-human-touching-big-data-network-connection-background-science-artificial-intelligence-172987598.jpg"
        />
        <meta property="og:site_name" content="Learning platform" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="Dima" />
        <meta property="twitter:title" content="Learning platform" />
        <meta
          property="twitter:description"
          content="Platform with a lot of courses and lessons"
        />
        <meta
          property="twitter:image"
          content="https://thumbs.dreamstime.com/b/ai-machine-learning-hands-robot-human-touching-big-data-network-connection-background-science-artificial-intelligence-172987598.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
