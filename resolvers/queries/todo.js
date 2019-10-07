const todo = {
  todos(parent, args, {models}, info) {
    return [
      {
        id: 'todoa',
        title: 'Do task A',
      },
      {
        id: 'todob',
        title: 'Do task B',
      },
    ];
  },
};

export default todo;
