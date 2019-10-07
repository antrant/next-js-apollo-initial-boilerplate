import withApollo from 'next-with-apollo';
import ApolloClient, {InMemoryCache} from 'apollo-boost';

const GRAPHQL_URL = process.env.GRAPHQL_URL;

export default withApollo(
    ({ctx, headers, initialState}) =>
      new ApolloClient({
        uri: GRAPHQL_URL,
        cache: new InMemoryCache().restore(initialState || {}),
      }),
    {getDataFromTree: 'never'},
);
