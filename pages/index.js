import gql from 'graphql-tag';

import TodoList from '../components/TodoList';

const TODOS = gql`
    query {
        todos {
            id
            title
        }
    }
`;

const Index = ({loading, error, data}) => {
  const {todos} = data;

  return (
    <TodoList todos={todos}/>
  );
};

Index.getInitialProps = ({apolloClient}) => {
  return apolloClient.query({query: TODOS});
};

export default Index;
