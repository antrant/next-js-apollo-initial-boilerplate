const todo = {
  todos(parent, args, {models}, info) {
    console.log(models);

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
