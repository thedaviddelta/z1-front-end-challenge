import HomeView from '$/containers/Views/Home';
import {
  createApolloInstance,
  getApolloStateObject,
} from '$/graphql/apollo-client';
import GET_SONGS from '$/graphql/GetSongs.graphql';
import { GetSongsQuery } from '$/graphql/types';
import { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage = () => <HomeView />;

export const getStaticProps: GetStaticProps = async () => {
  const client = createApolloInstance();

  await client.query<GetSongsQuery>({
    query: GET_SONGS,
  });

  return {
    props: getApolloStateObject(client),
  };
};

export default HomePage;
