const todos = [
  {
    id: '1',
    text: 'Hello world',
    complete: false,
  },
  {
    id: '2',
    text: 'test test',
    complete: true,
  }
];

const resolvers = {
  Query: {
    todos: () => todos,
    todo: (root, { id }) => todos.find(todo => todo.id === id),
  },
};

export default resolvers;
