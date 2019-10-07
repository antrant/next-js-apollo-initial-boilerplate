import PropTypes from 'prop-types';

const TodoList = ({todos}) => {
  return (
    <>
      {todos.map((todo) => (
        <h2 key={todo.id}>{todo.title}</h2>
      ))}
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
