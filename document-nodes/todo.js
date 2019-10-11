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

export default {GET_TODOS, DELETE_TODO, ADD_TODO};
