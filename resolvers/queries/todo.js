import {resolver} from 'graphql-sequelize';

const todo = {
  todos: resolver((parent, args, {models}, info) => models.Todo),
};

export default todo;
