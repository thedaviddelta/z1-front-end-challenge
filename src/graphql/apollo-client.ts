import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import deepmerge from 'deepmerge';
import { useMemo } from 'react';

// https://github.com/vercel/next.js/tree/canary/examples/with-apollo

const STATE_PROP_NAME = '__APOLLO_STATE__';

// create an instance for every server-side call
export const createApolloInstance = () =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createHttpLink({
      uri: process.env['NEXT_PUBLIC_GRAPHQL_SCHEMA'],
    }),
    cache: new InMemoryCache(),
  });

// but a single client-side instance
const clientInstance = createApolloInstance();

const addStateToInstance = (state?: NormalizedCacheObject) => {
  if (!state) return;

  const cache = clientInstance.cache.extract();
  const mergedCache = deepmerge(cache, state, {
    arrayMerge: <T extends { __ref: string }[]>(target: T, source: T) => [
      ...source,
      ...target.filter((targetItem) =>
        source.every((sourceItem) => targetItem.__ref !== sourceItem.__ref),
      ),
    ],
  });
  clientInstance.cache.restore(mergedCache);
};

// pass the server-side request cache to the page props
export const getApolloStateObject = (
  client: ApolloClient<NormalizedCacheObject>,
) => ({
  [STATE_PROP_NAME]: client.cache.extract(),
});

export type PagePropsWithApollo = {
  [STATE_PROP_NAME]: NormalizedCacheObject;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

// consume and merge it on the client-side client only when the state changes
// useEffect doesn't do the work here because it runs after the first render
export const useApolloClient = (props: PagePropsWithApollo) => {
  const state = props[STATE_PROP_NAME];

  return useMemo(() => {
    addStateToInstance(state);
    return clientInstance;
  }, [state]);
};
