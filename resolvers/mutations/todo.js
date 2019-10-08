const todo = {
  async createTodo(parent, args, {models}, info) {
    return await models.Todo.create(args.data);
  },
};

export default todo;
