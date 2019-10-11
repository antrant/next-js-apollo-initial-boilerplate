const todo = {
  async createTodo(parent, args, {models}, info) {
    return await models.Todo.create(args.data);
  },

  async deleteTodo(parent, args, {models}) {
    return await models.Todo.destroy(args);
  },

  async updateTodo(parent, {values, options}, {models}) {
    return await models.Todo.update(values, options);
  },
};

export default todo;
