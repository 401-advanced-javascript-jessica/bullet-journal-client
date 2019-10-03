export default (state = [], { type, payload }) => {
  switch (type) {
    case 'TASK_CREATE':
      return [...state, payload];
    case 'TASK_UPDATE':
      return state.map(() => {
        return state;
        // payload.id === author.id ? { ...author, name: payload.name } : author;
      });
    case 'TASK_DELETE':
      return state;
      // state.filter((author) => payload !== author.id);
    default:
      return state;
  }
};
