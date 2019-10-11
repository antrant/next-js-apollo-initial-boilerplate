import gql from 'graphql-tag';

// Queries
export const GET_TODOS = gql`
    query {
        todos {
            id
            title
            completed
        }
    }
`;

// Mutations
export const ADD_TODO = gql`
    mutation CreateTodo($data: JSON){
        createTodo(data: $data){
            id
            title
            completed
        }
    }
`;

export const DELETE_TODO = gql`
    mutation DeleteTodo($where: JSON){
        deleteTodo(where: $where)
    }
`;

export const UPDATE_TODO = gql`
    mutation UpdateTodo($values: JSON, $options: JSON){
        updateTodo(values: $values, options: $options)
    }
`;

export default {
  GET_TODOS,
  DELETE_TODO,
  ADD_TODO,
  UPDATE_TODO,
};
