import TodoList from '../components/TodoList';
import gql from 'graphql-tag';

const TODOS = gql`
    query {
        todos {
            id
            title
        }
    }
`;

const Index = ({loading, error, data}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error!</h2>;
  }

  const {todos} = data;

  return <TodoList todos={todos}/>;
};

Index.getInitialProps = ({apolloClient}) => {
  return apolloClient.query({query: TODOS});
};

export default Index;
